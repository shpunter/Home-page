import { createFileRoute } from '@tanstack/react-router'
import Sort from "../components/sort/sort.tsx";

export const Route = createFileRoute('/sort')({
  component: Sort,
})

