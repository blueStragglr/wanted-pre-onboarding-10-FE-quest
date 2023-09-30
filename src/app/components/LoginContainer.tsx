import Button from "../items/Button";
import Input from "../items/Input";

export default function LoginContainer() {
  return <>
    <form>
      <div className="flex flex-col justify-center gap-8 p-4">
        <div className="flex flex-row justify-center">
          <h2 className="text-TPrimary">Login Your Todo App</h2>
        </div>
        <div className="flex flex-col gap-5">
          <Input name="id" label="ID" placeholder="" required onChange={() => {}}></Input>
          <Input name="id" label="PW" placeholder="" required onChange={() => {}}></Input>
        </div>
        <div className="flex flex-row justify-center">
          <Button>로그인</Button>
        </div>
      </div>
    </form>
  </>
}