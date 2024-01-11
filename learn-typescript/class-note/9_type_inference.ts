var a="10";

function getB(b=10){
    var c=1;
    return b+c;
}

interface drop<T>{
    value: T;
    title: string;
}
var shopping: drop<string>[] = [{ value: '1', title: '2' },{ value: '1', title: '2'}]

interface dropDetail<K> extends drop<K>{
    description : string;
    tag: K;
}

var descriptionItem: dropDetail<number> = {
    value: 1,
    title: 'string',
    description : 'string',
    tag: 1
};

var arr = [1,2,true,true,'a'];

const name: string = 'Capt';

const name = 'Capt' as string;