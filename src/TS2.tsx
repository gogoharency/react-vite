import { useState } from 'react'

export default function App() {
  //数组
  // const list: number[] = [1,2];
  // const list: [number, string] = [1,'dddd'];
  const list: Array<number> = [1, 2]

  interface arrFace {
    name?: string
    value: number
  }
  const list1: Array<arrFace> = [
    { name: '2', value: 1 },
    { name: '2', value: 1 },
  ]
  // const list1: Array<{name: string, value: number}> = [{name: '2', value: 1}, {name: '2', value: 1}]
  // const list1: {name: string, value: number}[] = [{name: '2', value: 1}, {name: '2', value: 1}]
  // const list1: [{name: string, value: number}] = [{name: '2', value: 1}]

  //函数
  // function fun (a: number, b: number): number {
  // 	return a + b
  // }

  function fun(): void {
    console.log(1111)
  }

  // function fun (): unknown {
  // return undefined
  // throw new Error('3131')
  // }

  const fun1 = (a: number, b: number): number => {
    return a + b
  }
  const fun2 = (a: number, b: number) => {
    return a + b
  }

  const fun3: (a: number, b: number) => number = (a, b) => {
    return a + b
  }

	interface sum {
		(a: number, b: number): void
	 }
	 // 函数定义一般用type
	 type sun1 = (a: number, b: number) => void

	 const fun4: sum = (a: number, b: number) => {
		console.log(a, b)
	 }

  // 交叉类型
  //	对于基础变量来说
  //  let id = 1
  //  let id = '1'
  let id: number | string = 1
  // 对于对象来说
  type AgeType = { age: number }

  type UserType = { id: number; name: string }

  const userAge: AgeType = { age: 30 }

  const userInfo: UserType = { id: 2, name: '222' }

  const user: UserType & AgeType = { id: 1, name: 'jack', age: 30 }

// 接口
 interface user {
	readonly name: string
	age?: number
	hender: string
	[key: string]: string | number | boolean
 }

 const tt: user = {
	name: '2222',
	hender: '433',
	ff: 11
 }

 // tt.name = '1' // 报错，只读

 // 继承

 interface Y {
	name: string
 }
interface YY extends Y {
	all: boolean
}

// interface 可以重复，会合并属性，type不可重复，报错
interface YY {
	jj: string
}

const yg: YY = {
	name: '1',
	all: false,
	jj: '/333'
}// type没有继承，只有用上面的交叉&和联合| 类型语法


// keyof typeof in
interface keyT {
	name: string
	age: number
	hender: string
 }

 type keyList = keyof keyT

  return <>3123</>
}
