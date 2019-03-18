# CupsApp

## 2 modules

### Cup Module - 3 Main Components

#### CupsListComponent 

Renders a single cup, retrieves data from a `cupService`, which implements a Cup Interface, that can be extended when necessary. 

#### CupItemComponent

Interprolation used to dynamically render data

#### CupAddComponent 

Using Template Driven Forms 

### Login Module

#### LoginComponent

Uses reactive forms using the formbuilder.

### Lazy Loading - 2 modules
`app-routing.module.ts`

### Features Completed
1. 3 Views - Login View, Cups List View, Add new Cup View
2. Routing 
3. Lazy Loaded - 2 different modules
4. Added `cups.service.ts` to mimick retrieval of Cup data 
5. Step up Login form to use Reactive Form Module
6. Step up Add Cup Component to use Template Driven Form 

### Missing Features
1. Create a new cup
2. Delete a cup
3. Update a cup

Next steps is to have an API to preform CRUD operations using the HTTPClient to `post`, `put`, `delete`