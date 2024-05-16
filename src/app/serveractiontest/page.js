import {sayHello} from "@/lib/actions";

const ServerActionTestPage = async () =>
{
    return(
        <div>
            <form action={sayHello()}>
                <button>Test me</button>
            </form>
        </div>
    )
}
export default ServerActionTestPage