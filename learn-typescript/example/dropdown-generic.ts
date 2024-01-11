interface inputType<T>{
  value: T;
  selected: boolean;
}

interface inputTypeEx{
  toString: any;
}

const emails: inputType<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: inputType<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem( item: inputType<string> | inputType<number> ) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  console.log(item);
  const selectTag = document.querySelector('#email-dropdown');
  //selectTag.appendChild(item);
});

// // NOTE: 이메일 드롭 다운 아이템 추가
// numberOfProducts.forEach(function (numberOfProduct) {
//   const item = createDropdownItem(numberOfProduct);
//   console.log(item);
//   const selectTag = document.querySelector('#product-dropdown');
//   //selectTag.appendChild(item);
// });