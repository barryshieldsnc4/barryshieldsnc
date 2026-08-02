One row of a work-experience timeline: dates/location in a mono meta column, role + org + narrative + bullet highlights in the main column, with optional inline stats.

```jsx
<TimelineItem
  dates="2021 – 2024" location="Mountain View, CA"
  role="Head of Sales Enablement" org="Elastic"
  summary="Built Elastic's global enablement org from the ground up."
  highlights={["Co-developed SalesGPT ahead of ChatGPT's launch"]}
  stats={[{value:"72%", label:"Win Rate"}]}
/>
```

Stack items directly; each renders its own top rule, so the list reads as a continuous timeline.
