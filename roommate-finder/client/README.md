## CSS In This Project

We're using a feature native to Create-React-App called modular Sass. This helps us clean up our imports sicne now we no longer have to import bootstrap.min.css in every component, instead we import it once globally and it works everywhere.

Additionally, we can organized component custom styling more easily. If a component needs some custom style that Bootstrap does not natively support, simple create a new file in the component's folder titled like "ComponentName.module.scss" and import the styles by placing the following import statement at the top of the component file:
'''
import styles from './ComponentName.module.scss';
'''

To use the style you have created, assign it to an element's classname like this:

'''

<div className={styles.your_class_name}>...</div>
'''

The result is that when your component is rendered, it is given it's own css namespace, meaning that the classnames defined in your component-level scss files do NOT need to be unique.

## API documentation

The primary documentation for react-modal is the
[reference book](https://reactjs.github.io/react-modal), which describes the API
and gives examples of its usage.
=======
