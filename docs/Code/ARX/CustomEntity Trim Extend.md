# 自定义实体Trim和Extend

## Derive from AcDbCurve and implement AcDbCurve virtual members.

## Extend

```c++
	virtual Acad::ErrorStatus subGetStretchPoints(
		AcGePoint3dArray& stretchPoints) const;
	virtual Acad::ErrorStatus subMoveStretchPointsAt(
		const AcDbIntArray & indices,
		const AcGeVector3d& offset
```

实现以上两个函数

## Trim

```c++
virtual Acad::ErrorStatus subIntersectWith(const AcDbEntity * ent,
		AcDb::Intersect intType,
		AcGePoint3dArray & points,
		Adesk::GsMarker thisGsMarker,
		Adesk::GsMarker otherGsMarker) const;
	virtual Acad::ErrorStatus subIntersectWith(
		const AcDbEntity* pEnt,
		AcDb::Intersect intType,
		const AcGePlane& projPlane,
		AcGePoint3dArray& points,
		Adesk::GsMarker thisGsMarker = 0,
		Adesk::GsMarker otherGsMarker = 0
	) const;
```

实现以上两个函数



