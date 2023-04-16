import { toast } from 'react-toastify'

export function notify(type: 'added' | 'limit' | 'deleted') {
  switch (type) {
    case 'added':
      toast.success('Adicionado ao carrinho')
      break
    case 'limit':
      toast.error('Limite alcançado 20 itens para cada café')
      break
    default:
      toast.error('Item removido com sucesso!', {
        icon: '🗑️',
      })
  }
}
