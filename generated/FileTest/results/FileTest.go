package main

import "io/ioutil"

type TestClass struct {
    
}

func NewTestClass() *TestClass {
    this := new(TestClass)
    
    return this
}

func (this *TestClass) TestMethod() string {
    file_content_bytes, _ := ioutil.ReadFile("../../input/test.txt")
    file_content := string(file_content_bytes)
    return file_content
}

func main() {
    c := (TestClass{})
    c.TestMethod();
}