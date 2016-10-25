const lib =require('./index');
const code =`
public class Bar
    {
        public object SayHello()
        {
            var x = new Zoo();
            return "Hi";
        }
    }
   `;
const helloWorld= `
namespace Foo
{
    ${code}
}`;

lib(helloWorld,'Foo.Bar','SayHello').then(data=>{
           console.log(data)
        })