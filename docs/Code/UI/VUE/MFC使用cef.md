# 编译CEF

参考资料[cef / BranchesAndBuilding](https://bitbucket.org/chromiumembedded/cef/wiki/BranchesAndBuilding)

直接下载二进制文件

| 01/07/2020 - 79.1.3+ga5342ed+chromium-79.0.3945.88 / Chromium 79.0.3945.88**STABLE** | [CEF source](https://bitbucket.org/chromiumembedded/cef/get/3945.tar.bz2) \| [Chromium source](https://gsdview.appspot.com/chromium-browser-official/chromium-79.0.3945.88.tar.xz) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Standard Distribution[cef_binary_79.1.3+ga5342ed+chromium-79.0.3945.88_windows64.tar.bz2](https://cef-builds.spotifycdn.com/cef_binary_79.1.3%2Bga5342ed%2Bchromium-79.0.3945.88_windows64.tar.bz2) |                                                              |

### 关于cmake中CMP0074变量设置以及＜PackageName＞_ROOT

### 问题分析

根据警告提示信息，_ROOT变量被忽略了，如果不想忽略需要使用cmake_policy指令设置变量CMP0074。

### 解决方法

在CMakeLists.txt中第二行添加一条cmake_policy(SET CMP0074 NEW) 或者 cmake_policy(SET CMP0074 OLD)，前面所示的警告就消失了。在Windows中使用cmake的一些无法找到库文件的错误提示，比如常见 xxx not found 也是因为这个变量没有设置忽略了PackageName_ROOT导致的。

[Vs2017 cef](https://blog.csdn.net/m0_67316550/article/details/123626418)

编译libcef_dll_wrapper debug和release版本



### .添加cefsimple中的文件

找到项目中对应文件，拷贝至MFC所在项目，如下图所示：

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20231011-20231011110037.png)



将resource里的文件全部拷贝到目录下

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20231010-20231010161418.png)

`E:\Gitee\cef\sample\MFCApplication2\MFCApplication2\simple_handler.h`

```cpp
// Copyright (c) 2013 The Chromium Embedded Framework Authors. All rights
// reserved. Use of this source code is governed by a BSD-style license that
// can be found in the LICENSE file.

#ifndef CEF_TESTS_CEFSIMPLE_SIMPLE_HANDLER_H_
#define CEF_TESTS_CEFSIMPLE_SIMPLE_HANDLER_H_

#include "include/cef_client.h"

#include <list>

class SimpleHandler : public CefClient,
                      public CefDisplayHandler,
                      public CefLifeSpanHandler,
                      public CefLoadHandler {
 public:
  explicit SimpleHandler(bool use_views);
  ~SimpleHandler();

  // Provide access to the single global instance of this object.
  static SimpleHandler* GetInstance();

  // CefClient methods:
  virtual CefRefPtr<CefDisplayHandler> GetDisplayHandler() OVERRIDE {
    return this;
  }
  virtual CefRefPtr<CefLifeSpanHandler> GetLifeSpanHandler() OVERRIDE {
    return this;
  }
  virtual CefRefPtr<CefLoadHandler> GetLoadHandler() OVERRIDE { return this; }

  // CefDisplayHandler methods:
  virtual void OnTitleChange(CefRefPtr<CefBrowser> browser,
                             const CefString& title) OVERRIDE;

  // CefLifeSpanHandler methods:
  virtual void OnAfterCreated(CefRefPtr<CefBrowser> browser) OVERRIDE;
  virtual bool DoClose(CefRefPtr<CefBrowser> browser) OVERRIDE;
  virtual void OnBeforeClose(CefRefPtr<CefBrowser> browser) OVERRIDE;

  // CefLoadHandler methods:
  virtual void OnLoadError(CefRefPtr<CefBrowser> browser,
                           CefRefPtr<CefFrame> frame,
                           ErrorCode errorCode,
                           const CefString& errorText,
                           const CefString& failedUrl) OVERRIDE;

  // Request that all existing browser windows close.
  void CloseAllBrowsers(bool force_close);
  CefRefPtr<CefBrowser> GetBrowser() { return m_Browser; }
  bool IsClosing() const { return is_closing_; }

 private:
  // Platform-specific implementation.
  void PlatformTitleChange(CefRefPtr<CefBrowser> browser,
                           const CefString& title);

  // True if the application is using the Views framework.
  const bool use_views_;

  // List of existing browser windows. Only accessed on the CEF UI thread.
  typedef std::list<CefRefPtr<CefBrowser>> BrowserList;
  BrowserList browser_list_;
  CefRefPtr<CefBrowser> m_Browser;
  int m_BrowserId;
  int m_BrowserCount;
  bool is_closing_;

  // Include the default reference counting implementation.
  IMPLEMENT_REFCOUNTING(SimpleHandler);
};

#endif  // CEF_TESTS_CEFSIMPLE_SIMPLE_HANDLER_H_

```

添加一个`CefRefPtr<CefBrowser> GetBrowser() { return m_Browser; }`函数

`E:\Gitee\cef\sample\MFCApplication2\MFCApplication2\simple_handler.cc`

```cpp
// Copyright (c) 2013 The Chromium Embedded Framework Authors. All rights
// reserved. Use of this source code is governed by a BSD-style license that
// can be found in the LICENSE file.


#include <sstream>
#include <string>

#include "include/base/cef_bind.h"
#include "include/cef_app.h"
#include "include/cef_parser.h"
#include "include/views/cef_browser_view.h"
#include "include/views/cef_window.h"
#include "include/wrapper/cef_closure_task.h"
#include "include/wrapper/cef_helpers.h"
#include "simple_handler.h"

namespace {

SimpleHandler* g_instance = NULL;

// Returns a data: URI with the specified contents.
std::string GetDataURI(const std::string& data, const std::string& mime_type) {
  return "data:" + mime_type + ";base64," +
         CefURIEncode(CefBase64Encode(data.data(), data.size()), false)
             .ToString();
}

}  // namespace

SimpleHandler::SimpleHandler(bool use_views)
    : use_views_(use_views), is_closing_(false) {
  DCHECK(!g_instance);
  g_instance = this;
}

SimpleHandler::~SimpleHandler() {
  g_instance = NULL;
}

// static
SimpleHandler* SimpleHandler::GetInstance() {
  return g_instance;
}

void SimpleHandler::OnTitleChange(CefRefPtr<CefBrowser> browser,
                                  const CefString& title) {
  CEF_REQUIRE_UI_THREAD();

  if (use_views_) {
    // Set the title of the window using the Views framework.
    CefRefPtr<CefBrowserView> browser_view =
        CefBrowserView::GetForBrowser(browser);
    if (browser_view) {
      CefRefPtr<CefWindow> window = browser_view->GetWindow();
      if (window)
        window->SetTitle(title);
    }
  } else {
    // Set the title of the window using platform APIs.
    PlatformTitleChange(browser, title);
  }
}

void SimpleHandler::OnAfterCreated(CefRefPtr<CefBrowser> browser) {
  CEF_REQUIRE_UI_THREAD();

  // Add to the list of existing browsers.
  browser_list_.push_back(browser);
  if (!m_Browser.get()) {
	  // Keep a reference to the main browser.
	  m_Browser = browser;
	  m_BrowserId = browser->GetIdentifier();
  }

  // Keep track of how many browsers currently exist.
  m_BrowserCount++;
}

bool SimpleHandler::DoClose(CefRefPtr<CefBrowser> browser) {
  CEF_REQUIRE_UI_THREAD();

  // Closing the main window requires special handling. See the DoClose()
  // documentation in the CEF header for a detailed destription of this
  // process.
  if (browser_list_.size() == 1) {
    // Set a flag to indicate that the window close should be allowed.
    is_closing_ = true;
  }

  // Allow the close. For windowed browsers this will result in the OS close
  // event being sent.
  return false;
}

void SimpleHandler::OnBeforeClose(CefRefPtr<CefBrowser> browser) {
  CEF_REQUIRE_UI_THREAD();

  // Remove from the list of existing browsers.
  BrowserList::iterator bit = browser_list_.begin();
  for (; bit != browser_list_.end(); ++bit) {
    if ((*bit)->IsSame(browser)) {
      browser_list_.erase(bit);
      break;
    }
  }

  if (browser_list_.empty()) {
    // All browser windows have closed. Quit the application message loop.
    CefQuitMessageLoop();
  }
}

void SimpleHandler::OnLoadError(CefRefPtr<CefBrowser> browser,
                                CefRefPtr<CefFrame> frame,
                                ErrorCode errorCode,
                                const CefString& errorText,
                                const CefString& failedUrl) {
  CEF_REQUIRE_UI_THREAD();

  // Don't display an error for downloaded files.
  if (errorCode == ERR_ABORTED)
    return;

  // Display a load error message using a data: URI.
  std::stringstream ss;
  ss << "<html><body bgcolor=\"white\">"
        "<h2>Failed to load URL "
     << std::string(failedUrl) << " with error " << std::string(errorText)
     << " (" << errorCode << ").</h2></body></html>";

  frame->LoadURL(GetDataURI(ss.str(), "text/html"));
}

void SimpleHandler::CloseAllBrowsers(bool force_close) {
  if (!CefCurrentlyOn(TID_UI)) {
    // Execute on the UI thread.
    CefPostTask(TID_UI, base::Bind(&SimpleHandler::CloseAllBrowsers, this,
                                   force_close));
    return;
  }

  if (browser_list_.empty())
    return;

  BrowserList::const_iterator it = browser_list_.begin();
  for (; it != browser_list_.end(); ++it)
    (*it)->GetHost()->CloseBrowser(force_close);
}

```

增加一个`cef.manifest`文件

```xml
<?xml version="1.0" encoding="utf-8"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">  
  <compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1">  
    <application> 
      <!--The ID below indicates application support for Windows 8.1 -->  
      <supportedOS Id="{1f676c76-80e1-4239-95bb-83d0f6d0da78}"/>  
      <!-- 10.0 -->  
      <supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}"/> 
    </application> 
  </compatibility> 
</assembly>
```

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20231010-20231010161811.png)

