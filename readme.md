### csharp-runner

Allow you to run c# code with nodejs

## ___.Net Framework is required!___

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
