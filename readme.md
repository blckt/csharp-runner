### csharp-runner

Allow run console application with nodejs

.Net Framework is required!

### Example usage

```
const lib =require('csharp-runner');
const code =`
public class Bar
    {
        public object SayHello()
        {
            var x = new Zoo();
            return "Hi";
        }
    }
const helloWorld= `
namespace Foo
{
    ${code}
}`;

lib(helloWorld,'Foo.Bar','SayHello').then(data=>{
           console.log(data)
        })
```
*Output will be 'Hi'*
