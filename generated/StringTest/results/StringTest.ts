class TestClass {
  public testMethod() {
    const x = "x";
    const y = "y";
    
    let z = "z";
    z += "Z";
    z += x;
    
    const a = "abcdef".substring(2, 4);
    const arr = "ab  cd ef".split(" ");
    
    return z + "|" + x + y + "|" + a + "|" + arr[2];
  }
}

new TestClass().testMethod();