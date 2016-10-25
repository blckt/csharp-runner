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
    public class Zoo{
        public object HelloZoo(){
            return new {
                Status="Hello"
            };
        }
    }`;
const helloWorld= `
namespace Foo
{
    ${code}
}`;

lib(helloWorld,'Foo.Bar','SayHello').then(data=>{
           console.log(data)
        })