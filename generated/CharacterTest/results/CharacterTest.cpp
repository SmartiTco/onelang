#include <memory>
#include <fstream>
#include <vector>
#include <map>
#include <iostream>

class OneMapHelper {
  public:
    template<typename K, typename V> static std::shared_ptr<std::vector<K>> keys(const std::map<K,V>& map) {
        std::vector<K> result;
        for(auto it = map.begin(); it != map.end(); ++it)
            result.push_back(it->first);
        return std::make_shared<std::vector<K>>(result);
    }

    template<typename K, typename V> static std::shared_ptr<std::vector<V>> values(const std::map<K,V>& map) {
        std::vector<V> result;
        for(auto it = map.begin(); it != map.end(); ++it)
            result.push_back(it->second);
        return std::make_shared<std::vector<V>>(result);
    }
};

class OneStringHelper {
  public:
    static std::shared_ptr<std::vector<std::string>> split(const std::string& str, const std::string& delim)
    {
        std::vector<std::string> tokens;
        
        size_t prev = 0, pos = 0;
        do
        {
            pos = str.find(delim, prev);
            if (pos == std::string::npos) pos = str.length();
            std::string token = str.substr(prev, pos - prev);
            tokens.push_back(token);
            prev = pos + delim.length();
        }
        while (pos < str.length() && prev < str.length());

        return std::make_shared<std::vector<std::string>>(tokens);
    }
};

class OneFile {
  public:
    static std::string readText(const std::string& path)
    {
      std::ifstream file(path);
      std::string content((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
      return content;
    }
};

class TestClass {
  public:
    void testMethod() {
        auto str = std::string("a1A");
        for (int i = 0; i < str.size(); i++) {
            auto c = str.substr(i, 1);
            auto is_upper = std::string("A") <= c && c <= std::string("Z");
            auto is_lower = std::string("a") <= c && c <= std::string("z");
            auto is_number = std::string("0") <= c && c <= std::string("9");
            std::cout << (is_upper ? std::string("upper") : is_lower ? std::string("lower") : is_number ? std::string("number") : std::string("other")) << std::endl;
        }
    }

  private:
    
    
    
};



int main()
{
    TestClass c;
    c.testMethod();
    return 0;
}