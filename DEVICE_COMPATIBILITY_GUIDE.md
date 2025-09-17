# Device Compatibility Guide

This guide outlines the responsive design principles and device compatibility standards for the Elegant Tiles & Decor website.

## Viewport Configuration

The website uses the following viewport meta tag for optimal device compatibility:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
```

## Breakpoints

The website follows a mobile-first responsive design approach with the following breakpoints:

- **Mobile**: 0px to 767px
- **Tablet**: 768px to 1023px
- **Desktop**: 1024px and above

## Responsive Utility Classes

Custom CSS utility classes have been created for responsive design:

### Display Utilities
- `.mobile\:hidden` - Hidden on mobile devices
- `.tablet\:hidden` - Hidden on tablet devices
- `.desktop\:hidden` - Hidden on desktop devices
- `.mobile\:block` - Display as block on mobile devices
- `.tablet\:block` - Display as block on tablet devices
- `.desktop\:block` - Display as block on desktop devices

### Flexbox Utilities
- `.mobile\:flex` - Display as flex on mobile devices
- `.tablet\:flex` - Display as flex on tablet devices
- `.desktop\:flex` - Display as flex on desktop devices
- `.mobile\:flex-col` - Flex direction column on mobile
- `.tablet\:flex-row` - Flex direction row on tablet
- `.desktop\:flex-row` - Flex direction row on desktop

### Typography Utilities
- `.mobile\:text-sm` - Small text on mobile
- `.mobile\:text-base` - Base text on mobile
- `.tablet\:text-lg` - Large text on tablet
- `.tablet\:text-xl` - Extra large text on tablet
- `.desktop\:text-2xl` - 2x large text on desktop
- `.desktop\:text-3xl` - 3x large text on desktop

### Spacing Utilities
- `.mobile\:p-2` - Padding on mobile
- `.mobile\:p-4` - Larger padding on mobile
- `.tablet\:p-6` - Padding on tablet
- `.tablet\:p-8` - Larger padding on tablet
- `.desktop\:p-10` - Padding on desktop
- Similar patterns for margin (m-*), padding-x (px-*), padding-y (py-*), margin-x (mx-*), margin-y (my-*)

### Width Utilities
- `.mobile\:w-full` - Full width on mobile
- `.tablet\:w-1/2` - Half width on tablet
- `.desktop\:w-1/3` - One-third width on desktop

## JavaScript Responsiveness

The website includes a responsive design system with the following features:

### Device Detection
```typescript
import { useResponsive } from "@/hooks/useResponsive";

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop, deviceType } = useResponsive();
  
  return (
    <div>
      {isMobile && <MobileContent />}
      {isTablet && <TabletContent />}
      {isDesktop && <DesktopContent />}
    </div>
  );
};
```

### Responsive Image Loading
```typescript
import { loadResponsiveImage } from "@/lib/responsive";

const imageElement = document.getElementById('myImage') as HTMLImageElement;
loadResponsiveImage(imageElement, {
  mobile: '/images/mobile.jpg',
  tablet: '/images/tablet.jpg',
  desktop: '/images/desktop.jpg',
  default: '/images/default.jpg'
});
```

### Font Size Adjustment
```typescript
import { adjustFontSize } from "@/lib/responsive";

const titleElement = document.getElementById('title') as HTMLElement;
adjustFontSize(titleElement, 32); // Base font size of 32px
```

## Component Responsiveness Guidelines

### Header Component
- Mobile: Hamburger menu, simplified navigation
- Tablet: Expanded navigation with icons
- Desktop: Full navigation with dropdown menus

### Hero Section
- Mobile: Single column layout, reduced animations
- Tablet: Two column layout, moderate animations
- Desktop: Full layout with all animations

### Product Grid
- Mobile: Single column grid
- Tablet: Two column grid
- Desktop: Three or four column grid

### Forms
- Mobile: Full width inputs, stacked layout
- Tablet: Partial width inputs, some inline elements
- Desktop: Multiple columns where appropriate

## Performance Considerations

### Image Optimization
- Use responsive images with srcset attributes
- Implement lazy loading for images below the fold
- Provide appropriately sized images for each breakpoint

### Animation Optimization
- Reduce animation complexity on mobile devices
- Use CSS transforms instead of changing layout properties
- Implement requestAnimationFrame for custom animations

### Touch Device Enhancements
- Increase touch target sizes to at least 44px
- Add appropriate hover and active states
- Implement touch-friendly navigation patterns

## Testing Guidelines

### Device Testing
- Test on actual mobile devices (iOS and Android)
- Test on tablets in both portrait and landscape orientations
- Test on various desktop screen sizes

### Browser Testing
- Chrome (latest versions)
- Safari (latest versions)
- Firefox (latest versions)
- Edge (latest versions)

### Emulation Testing
- Use browser developer tools for additional device testing
- Test with various network conditions
- Test with different pixel densities

## Accessibility Considerations

### Screen Reader Compatibility
- Ensure proper heading hierarchy
- Provide alternative text for images
- Maintain keyboard navigation

### Color Contrast
- Maintain WCAG AA compliance (4.5:1 contrast ratio)
- Test with color blindness simulators

### Focus Management
- Ensure visible focus indicators
- Manage focus order appropriately
- Implement skip navigation links

## Future Enhancements

### Progressive Web App (PWA)
- Implement service workers for offline functionality
- Add install prompts for mobile devices
- Optimize for Core Web Vitals

### Advanced Media Queries
- Implement prefers-reduced-motion media query
- Add dark mode support with prefers-color-scheme
- Consider orientation-based layouts

This guide should be updated as new responsive design patterns are implemented or as new device categories emerge.