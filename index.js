function Student(name,age){
    console.log('this', this);
    this.name = name,
    this.age = age
}

const call = new Student('Chay',24);

