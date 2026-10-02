# Dark / Light Mode

Add a polished dark/light mode to this Next.js app using the existing Tailwind and shadcn setup.

## Requirements

- Use `next-themes` with system preference as the default.
- Add a theme toggle button in the header with Sun/Moon icons from `lucide-react`.
- Persist the selected theme across reloads.
- Avoid hydration mismatch.
- Define semantic CSS variables for backgrounds, foregrounds, borders, muted text, cards, and accents in both light and dark modes.
- Update every Learning Map section, including the glass cards, grid canvas background, tags, navigation, and text, so both themes feel intentional and readable.
- In dark mode, keep the current navy grid + glass aesthetic.
- In light mode, use a soft cool-white background, subtle blue-gray grid, and translucent white glass cards with sufficient contrast.
- Do not hard-code theme-specific colors inside components; use semantic Tailwind/CSS variables.
- Keep the layout and existing components unchanged aside from theme support.
- Run lint and build after implementation.
