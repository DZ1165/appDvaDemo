const fn2={
  obj1:()=>{
    console.log(this);
  },
  obj2(){
    console.log(this);
  }
}
fn2.obj1()
fn2.obj2()