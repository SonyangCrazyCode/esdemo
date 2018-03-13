class animal{
  constructor(name)
  {
    this.name=name;
    this.age=1;     
  }
  say()
  {
    return this.name+" say";
  }
  walk()
  {
    return this.name+" walk";
  }
}

class dog extends animal
{
  constructor(name)
  {
    super(name);
    this.name=name;
  }
  helpPerson(...per)
  {
    let behavior="";
    for(let p of per)    
    {
      behavior+=this.name+" help "+ p +",";
    }
    return behavior.substring(0,behavior.length-1);
  }
}

function fun1()
{
    return "fun1";
}