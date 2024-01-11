var emails = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
];
var numberOfProducts = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
];
function createDropdownItem(item) {
    var option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}
// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
    var item = createDropdownItem(email);
    console.log(item);
    var selectTag = document.querySelector('#email-dropdown');
    console.log(selectTag);
    //selectTag.appendChild(item);
});
// NOTE: 이메일 드롭 다운 아이템 추가
numberOfProducts.forEach(function (numberOfProduct) {
    var item = createDropdownItem(numberOfProduct);
    console.log(item);
    var selectTag = document.querySelector('#email-dropdown');
    //selectTag.appendChild(item);
});
