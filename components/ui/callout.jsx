import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/new-york/ui/alert"


export function Callout({ title, children, icon, ...props }) {
  return (
    <Alert {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
