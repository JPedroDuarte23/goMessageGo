export default function TelefoneInput() {
  return (
    <div className="flex items-center gap-6">
      <label htmlFor="" className="text-base font-semibold w-60">Número de telefone: <strong className="text-red-500">*</strong> </label>
      <div className="w-23 h-14 bg-gray-50 rounded-lg pt-1 p-2  shadow-input">
        <h4 className="text-xs font-semibold">Ddd</h4>
        <div className="flex items-center gap-2">
          <img className="ml-1 w-5 h-5" src="https://s3-alpha-sig.figma.com/img/b013/4187/d79941ed2988eb1295b510d8b0ed9281?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1QqZ6cnD8hz59KZXKqozBpuhEGxfEqem-qM5DqOxItj0PM4HUpgSP8JdJzlzBKUm5bs1Biv5mhJRL7R1skeITn5zlzB6q~x3WT1WAoQ4h0K3pEro86vmi8K2bL5-IfkLD9Vqs1yDSksLkfGXV-spa06skOO372O~nB-ugFwGV3kxGN02uMqld8lIPgx3vduelxWt~yYujH13T6d17K8NCFAD7lkQmA21L00FL6bTqsUER7H8OpYKnb1xjXJX7dlJQRCt09CAYKij45UnboNvbonQYsXbrCvytMip7gqNKlCIEqUmwQMCkx0G8N~NVREc5aYgYh5aHk8731CMw9PWA__"/>
          <input className="w-8 bg-transparent focus:outline-none" type="text" value="+55" />
        </div>
      </div>
      <div className="w-2/5 ml-4 p-4 bg-gray-50 rounded-lg shadow-input">
        <input className="focus:outline-none w-full bg-transparent" type="text" placeholder="Digite o número do telefone"/>
      </div>
    </div>
  )
}