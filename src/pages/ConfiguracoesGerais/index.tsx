import Button from "../../components/Button";
import SelectInput from "../../components/SelectInput";
import TelefoneInput from "../../components/TelefoneInput";

export default function ConfiguracoesGerais() {
  return (
    <form action="">
      <div className="my-4 p-8 rounded-xl bg-white flex flex-col gap-4 font-quicksand">
        <h2 className="font-bold text-lg">Ajustes de telefone</h2>
        <p className="text-base">Aqui, você pode configurar o número de telefone que será utilizado pela nossa aplicação para enviar mensagens aos clientes. É importante que o número de telefone fornecido seja válido e esteja ativo, pois todas as comunicações importantes, como notificações, atualizações e promoções, serão enviadas através dele.</p>
        <TelefoneInput />
        <h2 className="my-4 font-bold text-lg">Preferências</h2>
        <SelectInput />
      </div>
      <div className="flex w-full flex-row-reverse">
        <Button label="Salvar alterações" classname="py-2 px-8 rounded-lg font-semibold"/>
      </div>
    </form>

  )
}