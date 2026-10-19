export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function formatPhone(phone: string) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}
