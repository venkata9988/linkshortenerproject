# shadcn/ui Instructions

Use shadcn/ui for every UI element in this application. Do not create custom UI components.

- Check the available shadcn/ui components before implementing a UI element.
- Compose shadcn/ui primitives for larger interfaces instead of creating replacements.
- Install missing components with `npx shadcn@latest add <component-name>`; place them in `components/ui/`.
- Import components through the project alias, such as `@/components/ui/button`.
- Use shadcn variants and Tailwind `className` customization when styling is needed.
- Only add a component when shadcn/ui has no equivalent, and preserve the existing shadcn/ui conventions.
