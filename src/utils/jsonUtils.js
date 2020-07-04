// ===== json 정렬
export const jsonSort = (list, field, sortDirection) => {
  // console.log("---> jsonSrot: ", list, field, sortDirection);
  if (sortDirection === false) {
    // desc
    return list.sort((a, b) => {
      return a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0;
    });
  }
  // asc
  return list.sort((a, b) => {
    return a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;
  });
};

// ===== 지정된 필드으 json 전부 찾기
export const jsonFindAll = (_list, field, value) => {
  let list = [];
  let i = 0,
    k = 0,
    len = _list.length;

  for (; i < len; i++) {
    if (_list[i][field] === value) {
      list[k++] = _list[i];
    }
  }
  return list;
};
