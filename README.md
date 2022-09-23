# React Routed Website

A website to learn how react-router-dom@6 works.   

**createReactRouter()** creates a router for the application.
It receives a list with objects to create the possible routes.
Each object has a **path** property and an **element** property.

To display components inside routes, the root route object must
have a **children** property containing a list of route objects.
Children routes are rendered inside the root route by specifying
an *Outlet* component in the root jsx.

Using the *Link* component instead of a tags to link to routes prevent
the browser from making an actual request and helps react router make
the changes faster.