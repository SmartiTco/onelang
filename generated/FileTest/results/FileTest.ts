const fs = require('fs');

class TestClass {
  public testMethod() {
    const file_content = fs.readFileSync("../../input/test.txt", 'utf-8');
    return file_content;
  }
}

new TestClass().testMethod();