class TokenType {
  
}

TokenType.endToken = "EndToken";
TokenType.whitespace = "Whitespace";
TokenType.identifier = "Identifier";
TokenType.operatorX = "Operator";


class Token {
  constructor(value, is_operator) {
      this.isOperator = is_operator;
      this.value = value;
  }
}




class StringHelper {
  startsWithAtIndex(str, substr, idx) {
    return str.substring(idx, idx + substr.length) == substr;
  }
}



class Tokenizer {
  constructor(text, operators) {
      this.operators = operators;
      this.text = text;
  }

  getTokenType() {
    if (this.offset >= this.text.length) {
        return TokenType.endToken;
    }
    
    let c = this.text[this.offset];
    return c == " " || c == "\n" || c == "\t" || c == "\r" ? TokenType.whitespace : ("A" <= c && c <= "Z") || ("a" <= c && c <= "z") || ("0" <= c && c <= "9") || c == "_" ? TokenType.identifier : TokenType.operatorX;
  }
  
  tokenize() {
    const result = [];
    
    while (this.offset < this.text.length) {
        let char_type = this.getTokenType();
        
        if (char_type == TokenType.whitespace) {
            while (this.getTokenType() == TokenType.whitespace) {
                this.offset++;
            }
        } else if (char_type == TokenType.identifier) {
            const start_offset = this.offset;
            while (this.getTokenType() == TokenType.identifier) {
                this.offset++;
            }
            const identifier = this.text.substring(start_offset, this.offset);
            result.push(new Token(identifier, false));
        }   else {
        let op = "";
        for (const curr_op of this.operators) {
            if (StringHelper.startsWithAtIndex(this.text, curr_op, this.offset)) {
                op = curr_op;
                break
            }
        }
        
        if (op == "") {
            return null;
        }
        
        this.offset += op.length;
        result.push(new Token(op, true));
          }
    }
    
    return result;
  }
}





class TestClass {
  testMethod() {
    const operators = ["<<", ">>", "++", "--", "==", "!=", "!", "<", ">", "=", "(", ")", "[", "]", "{", "}", ";", "+", "-", "*", "/", "&&", "&", "%", "||", "|", "^", ",", "."];
    
    const input = "hello * 5";
    const tokenizer = new Tokenizer(input, operators);
    const result = tokenizer.tokenize();
    
    console.log("token count:");
    console.log(result.length);
    for (const item of result) {
        console.log(item.value + "(" + (item.isOperator ? "op" : "id") + ")");
    }
  }
}



new TestClass().testMethod();