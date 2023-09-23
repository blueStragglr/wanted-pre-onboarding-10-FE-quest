const onClickPrint = (e)=>{
    const $id = document.querySelector('input[name="user_id"]');
    const $pw = document.querySelector('input[name="user_pw"]');

    const [id, pw] = [$id.value, $pw.value];
    console.log(`id:${id} ,pw:${pw}`);
}