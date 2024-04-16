// script.jsでは即時関数で記述したが、ここからはESモジュールの規定に従って記述していく

import { publicFn as fn, publicVal as val } from "./moduleA.js"

fn()
fn()
fn()
console.log(val.prop++)
console.log(val++)
fn()