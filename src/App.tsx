import { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import { useRouter } from './useRouter';

function App() {
  const [formState, setFormState] = useState({ id: '', pw: '' });
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { id, pw } = formState;

    if (!id || !pw) {
      return alert('아이디 또는 패스워드를 입력해주세요.');
    }
    console.log('id : ', id);
    console.log('pw : ', pw);

    router.push('/contents');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setFormState((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <article>
      <p>👉 Login 👈</p>
      <form id="form" method="get" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID </label>
          <input
            id="user-id"
            name="id"
            placeholder="id를 입력해주세요."
            value={formState.id}
            onChange={(e) => onChange(e, 'id')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pw">PW </label>
          <input
            id="user-pw"
            name="pw"
            placeholder="pw를 입력해주세요."
            value={formState.pw}
            onChange={(e) => onChange(e, 'pw')}
          />
        </div>
        <button type="submit" className="submit-btn">
          로그인
        </button>
      </form>
    </article>
  );
}

export default App;
