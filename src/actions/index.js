// import {DECREMENT, INCREMENT, SET_COLOR} from "./ActionTypes";
import * as types from "./ActionTypes";

export function increment() {
  return{
    types:types.INCREMENT
  }
}
export function decrement() {
  return{
    types:types.DECREMENT
  }
}
export function set_color(color) {
  return{
    types:types.SET_COLOR,
    color
  }
}