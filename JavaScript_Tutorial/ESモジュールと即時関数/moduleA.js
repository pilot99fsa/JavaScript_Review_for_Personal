// script.jsでは即時関数で記述したが、ここからはESモジュールの規定に従って記述していく

console.log('ESmodule called');

let privateVal = 1;
// export let publicVal = 10;
export let publicVal = { prop: 10 };

export function publicFn() {
    console.log('publicFn called: ' + publicVal);
    privateVal++
    console.log('publicFn called: ' + privateVal);
}

function privateFn() {

}