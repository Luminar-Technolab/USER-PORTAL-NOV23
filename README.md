
            -------------------------------------------------------
                    ANGULAR - FRONTEND Technology
            -------------------------------------------------------


        Commands
    --------------
    1. Installing Angular CLI : npm i -g @angular/cli@16.1.7
    2. Create Angular Project : ng new project-name
    3. Run Angular Project : ng serve / ng s -o (use localhost:4200)
    4. to create component : ng g c component-name
    5. To create service : ng g s service-folder/service-name
    6. Module with routing : ng g m users-module --route users-module --module app.module
    7. pipe creation : ng g p pipe-folder/pipe-name
    8. pagination in Angular. - npm i ngx-pagination
    9. to convert table to pdf : npm install jspdf jspdf-autotable
    10. Angular material to provide angular ui : ng add @angular/material
    11. Angular highcharts : npm install highcharts-angular highcharts 
    12. Angular Guards : ng g g guard-folder/guard-name

            REACT                           ANGULAR
        --------------------------------------------------
    1.  Library                         1. Framework
    2.  Virtual DOM                     2. Real DOM
    3.  One way Binding                 3. Two way binding
    4.  use JSX, JS                     4. use ts, html
    5.  Published by Meta               5. Published by Google
    6.  Simple app                      6. Complex app

        Concepts
    ----------------

    1. Modules : organize the application parts into cohesive blocks of functionality. Each block focuses on providing a specific functionality or a feature.
    2. Component : contains the data and user interaction logic that define how the View looks and behaves
    3. Style components : provide style globally and locally
    4. Decorators : to provide meta data
    5. Selectors : used to display component in a template
    6. Data Binding : shairing data within a component
        - One way Binding : data shairing only in one direction
            - ts (compoenet) to html (view)
                - String Interpolation : use {{compoenet property}} in template
                - Property Binding : binding class property with tag attribute, 
                    [tag-attribute]="property"
            - html (view) to ts (compoenet)
                - event binding : (event)="function-call"
                - event binding with event as '$event', (event)="function-call($event)"
                - event binding Using template reference variable, use #templateReferenceVariable, (event) = "function-call(templateReferenceVariable)"
        - Two way binding : data shairing  in both direction at the same time
            - TemplateDriven Forms : first form tag in html part
                - 'ngModel' Directive : used to sahre data in two way
                - Import 'FormsModule' in module file
                - [(ngModel)]="compoent-property"
                - Applying validation
                    - 
            - ModelDriven Forms : first create model in ts file and linked with html later
    7. Setup Path for component
        - use app-routing.module.ts file to define path for compoenet
        - setup path as 'object' in 'Routes' array of app-routing.module.ts file
        - { path:'' , component:component-name }
        - use 'router-outlet' directive in app.component.html file to render component according the url
        - 'routerLink' attribute of a tag is used to redirect from one page to another in angular without refreshing
    8. Angular Directives : Class used to provide special behavior to angular elements
        - Component : used to display a compoenet in browser, ex: selector of a compoenet
        - Attribute : used to give style to angular elements
            - ngClass : used to provide class of style to angular elements
        - Structural : used to change structure of angular elements by adding or removing elements, use * symbol to indicate its structural directive
            - *ngIf : used to add/remove elements based on condition
            - *ngFor : used to display array in angular
                - *ngFor="let variable-name of array-name"
        - ngModel : used to manage user input data from its view and helps to perform 2 way binding
        - ngForm : used to manage form 
    9. Dependency Injection : used to communicate a class with another predefined class in angular
        - it should in the argument of constructor 
        - access-specifier variable-name:dependent-class-name
        - also use inject method to depedency injection
    10. Angular Services : To share common logic between components
        - To create service : ng g s service-folder/service-name
    11. Asynchronous function handling in Angular
        - RXJS (Reactive Extension for JS)
            - use 'Observable' to resolve asynchronus function
                - subscribe(observer object / callback function) : used to resolve resolved state,
                    observer object  : 'next' key which hold only server success response, 'error' key which hold only server/client error response
                - catch() : used to resolve reject state
            - API call based on observable
                - Import 'HttpClientModule'
                - 'httpClient' class
                    - consist of all http method
    12. 'AcivatedRoute' Class : Provides access to information about a route associated with a component 
    13. Pipes : used to transform user inputs to another format
        - Inbuilt pipes : 
        - Userdefined pipes
        - syntax: userData | pipe-name [:option]
    14. Parent child communication
        - parent to child : parent can share its 'property' to child, child must have Input decorator to accept parent data
        - child to parent : child can share only 'event' to parent, child must have Output decorator to pass data in any event to its parent 
        - 'EventEmitter' class : to generate user defined event, to execute userdefined event we have use emit method 
    15. Angular Guards : To Guard / protect the routes from unauthorized access 
        - CanActivate: Controls if a route can be activated.
        - CanActivateChild: Controls if children of a route can be activated.
        - CanLoad: Controls if a route can even be loaded. This becomes useful for feature modules that are lazy-loaded. They won’t even load if the guard returns false.
        - CanDeactivate: Controls if the user can leave a route. Note that this guard doesn’t prevent the user from closing the browser tab or navigating to a different address. It only prevents actions from within the application itself.


