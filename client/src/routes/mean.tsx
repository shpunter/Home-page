import { createFileRoute } from '@tanstack/react-router'
import Mean from "/client/src/pages/mean/mean.tsx";

export const Route = createFileRoute('/mean')({
  component: Mean,
})
