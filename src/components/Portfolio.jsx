import * as React from 'react';
import { BsSunFill, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Collapsible } from "./Collapsible"
import 'materialize-css/dist/css/materialize.min.css';

export const Portfolio = () => {
  return (
    <>
    <div id="content">
      <link rel="stylesheet" href="./static/css/Portfolio.css"></link>

      <div className="intro-section">
        <h1 className="center-text">
          About the ICS4U Portfolio
        </h1>
        <p>
          This page contains five articles I wrote about AP Computer Science topics - the culmination of all the topics from my ICS4U Course, V. Krasteva, 2023 Semester 2.
          All code snippets and examples are written using Java.
        </p>

        <h1 className="center-text">
          Bibliography
        </h1>
        <p>
          The following contains a compiled list of all sources that I used while writing the articles:
        </p>
        <ul>
          <li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html" target="_blank">Oracle - ArrayLists</a></li>
          <li><a href="https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP" target="_blank">TechTarget - Object Oriented Programming</a></li>
          <li><a href="https://www.javatpoint.com/upcasting-and-downcasting-in-java" target="_blank">JavaTPoint - Upcasting and Downcasting in Java</a></li>
          <li><a href="https://www.geeksforgeeks.org/upcasting-vs-downcasting-in-java/" target="_blank">GeeksForGeeks - Upcasting and Downcasting in Java</a></li>
          <li><a href="https://www.simplilearn.com/tutorials/java-tutorial/overriding-in-java#:~:text=In%20Java%2C%20method%20overriding%20occurs,one%20of%20its%20parent%20classes." target="_blank">SimpliLearn - Overriding in Java</a></li>
          <li><a href="https://www.mygreatlearning.com/blog/method-overloading-in-java/#:~:text=In%20other%20words%2C%20we%20can,is%20called%20the%20Overloaded%20Method." target="_blank">MyGreatLearning - Method Overloading in Java</a></li>
          <li><a href="https://www.javatpoint.com/abstract-class-in-java#:~:text=in%20Java%20first.-,Abstraction%20in%20Java,text%20and%20send%20the%20message." target="_blank">JavaTPoint - Abstraction</a></li>
          <li><a href="https://www.mygreatlearning.com/blog/polymorphism-in-java/#:~:text=In%20Java%2C%20polymorphism%20refers%20to,action%20in%20many%20different%20ways." target="_blank">MyGreatLearning - Polymorphism</a></li>
          <li><a href="https://www.w3schools.com/java/java_polymorphism.asp" target="_blank">W3Schools - Java Polymorphism</a></li>
          <li><a href="https://www.infoworld.com/article/2077421/abstract-classes-vs-interfaces-in-java.html" target="_blank">InfoWorld - Abstract Classes vs Interfaces in Java</a></li>
          <li><a href="https://www.w3schools.com/java/java_arrays.asp" target="_blank">W3Schools - Java Arrays</a></li>
          <li><a href="https://www.w3schools.com/java/java_arrays_multi.asp" target="_blank">W3Schools - Java Multidimensional Arrays</a></li>
          <li><a href="https://happycoding.io/tutorials/java/libraries" target="_blank">HappyCoding.io - Java Libraries</a></li>
          <li><a href="https://towardsdatascience.com/essential-programming-time-complexity-a95bb2608cac" target="_blank">Towards Data Science - Essential Programming Time Complexity</a></li>
          <li><a href="https://www.programiz.com/dsa/merge-sort" target="_blank">Programiz - Merge Sort</a></li>
          <li><a href="https://www.geeksforgeeks.org/bubble-sort/" target="_blank">GeeksForGeeks - Bubble Sort</a></li>
          <li><a href="https://www.programiz.com/dsa/binary-search" target="_blank">Programiz - Binary Search</a></li>
          <li><a href="https://codingbat.com/java/Recursion-1" target="_blank">CodingBat - Java Recursion Problems</a></li>
          <li><a href="https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/" target="_blank">GeeksForGeeks - Introduction to Recursion</a></li>
        </ul>
      </div>

      {/* Object-Oriented Programming */}
      <Collapsible title="Object-Oriented Programming" content={
        <>
          <h1>Objects and Classes</h1>
          <p>
            Object-Oriented Programming (OOP) is a model in computer science that Java uses. OOP organizes
            code by classes and instances of these classes - known as <strong>objects</strong>. It stems from the concept of objects in real life,
            where each object has unique properties, functions, and relationships with each other
            (such as one object being a <strong>subclass</strong> of another). 
            <br/><br/>
            Similar objects can be generalized to a class, where the class represents the template of that type of object. 
            Classes can contain attributes and behaviors, which refer to the variables and methods in a class, respectively.
            A class' attributes are similar to attributes of real objects, as they can describe properties, while behaviors represent the functionality of this class.
            Attributes and behaviors can also either be static or non-static. 
            Static means that this feature belongs to the class as a whole, while non-static means that it is different for each instance of the class.
            <br/><br/>
            For example, cars, motorcycles and trucks can all be generalized to the class "Vehicle". 
            The Vehicle class would then have a non-static variable that represents the number of wheels this instance of a Vehicle.
            Now, if we wanted to declare an object representing a car, we would create an of the Vehicle class with four wheels.  
            We could then create another Vehicle object representing a motorcyle, and this one could have a wheel count of two (the motorcycle would not have the same wheel count as the car, since non-static variables are unique to each instance of a class).
            However, if we wanted to represent the company that manufactured all these Vehicles, it would be most appropriate to declare a static variable for the company name, which all the instances of Vehicle share.
            <br/><br/>
            For a programmer, OOP can be helpful as it can save a lot of time while coding, since there is no need to create a new type
            of class for each variable declared. When a subclass inherits all of its superclass' variables and methods, OOP also avoids re-writing that code again through <strong>inheritance</strong>. 
            It also helps organize the flow and structure for a program, which is especially useful when working on larger scale projects.
          </p>

          <h1>Syntax in Java</h1>
          <p>
            To declare a <strong>class</strong> in Java, you can use the following syntax:
            
            <br/><br/>
            <code>
                public class myClass {"{"} <br/>
                {'\u00A0'}// variables and methods go here <br/>
                {'}'}
            </code>

            <br/><br/>
            Variables and methods can be declared within myClass, and all instances of this class can access the public variables and methods.
            <br/><br/>
            <strong>Brief note on modifiers:</strong>
            <br/>
            Modifiers are keywords placed before the declaration of a variable, method, or class.
            One type of modifiers are access modifiers, and they determine the scope of access for this variable, method, or class.
            The specifics of the scopes will not be covered in this article, but in general, "public" means that other classes can access it, while "private" means that it can only be accessed within this class.
            <br/><br/>
          </p>  

          <h1>Inheritance</h1>
          <p>
            So far, we have only looked at base classes - classes that are defined without inheriting from any parent classes.
            However, creating tree-like hiearchies within classes is one of the most powerful features of OOP.
            Inheritance refers to a subclass that inherits its parent class' attributes and behaviors. 
            Besides just the features that a child class receives from its parent, it can also add new ones and even override those that it inherited from its parent!
            Within a software, the parent class would usually have the most abstract and generalized variables and methods.
            Then, each of its children classes would specialize in a specific direction, and so on for those classes' children.

            <br/><br/>
            In Java, the syntax for defining a subclass that inherits from a parent class is shown below:
            <br/><br/>
            <code>
              public class Child extends Parent {"{"} <br/>
              {'\u00A0'}// variables and methods go here <br/>
              {"}"} <br/>
            </code>
          </p>

          <h1>Method Overloading and Overriding</h1>
          <p>
            Method overloading refers to when several methods in the same Class have the same name, but different set of parameters.
            The purpose is intended for methods that may take different types of data at different points, but internally follow a constant procedure.

            <br/><br/>
            Here is an example of three functions with the same identifier that returns the sum of its parameters:
            <br/><br/>

            <code>
              public int add(int a, int b){"{"} <br/>
              {'\u00A0'}return a + b; <br/>
              {"}"} <br/>

              public int add(int a, int b, int c){"{"} <br/>
              {'\u00A0'}return a + b + c; <br/>
              {"}"} <br/>

              public int add(int a, int b, int c, int d){"{"} <br/>
              {'\u00A0'}return a + b + c + d; <br/>
              {"}"}
            </code>

            <br/><br/>
            Method overloading is used within the same Class, but what if you wanted to create a method with the same name in a child Class?
            This procedure is known as method overriding. 
            The child Class must declare a method with the same name and the same set of parameters as the method it is trying to override. 
            When an object from a child Class overrides a method from its parent class, that new method will be run instead of the old one whenever it is called.

            <br/><br/>
            Here's an example of the child Class overriding its parent's method1 while adding its own method2:
            <br/><br/>

            <code>
              public class Base {"{"} <br/>
              {'\u00A0'}public void method1(){"{"} <br/>
              {'\u00A0'}{'\u00A0'}System.out.println("parent"); <br/>
              {'\u00A0'}{"}"} <br/>
              {"}"} <br/>

              public class Sub extends Base {"{"} <br/>
              {'\u00A0'}public void method1(){"{"} <br/>
              {'\u00A0'}{'\u00A0'}System.out.println("child"); <br/>
              {'\u00A0'}{"}"} <br/>
              {'\u00A0'}public void method2(){"{"} <br/>
              {'\u00A0'}{'\u00A0'}System.out.println("only i have this"); <br/>
              {'\u00A0'}{"}"} <br/>
              {"}"} <br/>
            </code>

            <br/><br/>
            The following driver code is run:
            <br/><br/>

            <code>
              Sub me = new Sub(); <br/>
              me.method1();
            </code>
            <br/><br/>

            Output: <br/><br/>
            <samp>
              child
            </samp>
            
          </p>

          <h1>Polymorphism</h1>
          <p>
            Polymorphism, which means "many forms", refers to the concept of using different classes with the same variable.
            These classes must be related through the inheritance hierarchy.
            When an object of the parent class is disguised as an instance of one of its children classes, this is known as upcasting.
            When the opposite is true, this is known as downcasting. 
            Upcasting can occur implicity - that is, any class can be automatically disguised as a reference to a more generic class.
            When an upcasted object of the parent class refers to a variable / method that is overriden in the child class, the child class' version will take priority.

            <br/><br/>
            Here's an example of downcasting taking place (the lasses are the same as the ones in the Method Overloading and Overriding section):
            <br/><br/>

            <code>
              Base b = new Sub();
              b.method1();
            </code>

            <br/><br/>
            Since the method1 is overriden for Sub, and b is currently being interpreted as a Sub, the child class' method will run:
            <br/><br/>

            <samp>
              child
            </samp>

            <br/><br/>
            However, this is not to say that b is exactly a Sub object. If we tried to run the following line, we will receive a compile time error:
            <br/><br/>

            <code>
              b.method2();
            </code>

            <br/><br/>
            The compiler would not know which class b currently represents, since any logic sequence prior could have changed b's class type. 
            So, just to be safe, it will ensure that method2 can be found in the Base class, which is what b was defined as.
            However, since method2() does not exist in Base, this code would not run.

            <br/><br/>
            Unlike upcasting, downcasting cannot happen implicity, as not all children classes can be disguised as an instance of one of its parent classes.
            You must specify that the child class is being casted to a parent class using the following syntax:
            <br/><br/>

            <code>
              Base b = new Sub();
              ((Sub) b).method2();
            </code>

            <br/><br/>
            From ((Sub) b), the object b will literally be casted into an instance of Sub, except the otherwise overriden methods in Sub will be ignored.
            The conditions for a valid downcast are more rigorous, as using the following syntax would not work:
            <br/><br/>

            <code>
              Sub s = new Base();
              // compile time error
            </code>

            <br/><br/>
            What the code above attempts is known as implicit downcasting, and it is not allowed (only explicit downcasting is allowed).
            <br/><br/>
          </p>

          <h1>Abstraction</h1>
          <p>
            Abstraction refers to when a method has a defined name and a parameter set, but the implementation itself is not actually tangible.
            The idea is that these incomplete methods can later be defined by the children classes - the parent class is only responsible for acknowledging that they exist.
            In Java, we can create an abstract class, which may contain these incomplete methods, using the modifier "abstract":
            <br/><br/>

            <code>
              public abstract class Shape {"{"} <br/>
              {'\u00A0'}public abstract double getArea(); <br/>
              {"}"} <br/>
            </code>

            <br/><br/>
            Note that abstract classes cannot actually be instantiated.
            We could then declare two tangible children classes to represent squares and circles:
            <br/><br/>

            <code>
              public class Square extends Shape {"{"} <br/>
              {'\u00A0'}private double s;
              {'\u00A0'}public double getArea(){"{"} <br/>
              {'\u00A0'}{'\u00A0'}return s * s; <br/>
              {'\u00A0'}{"}"} <br/>
              {"}"} <br/>
              <br/>
              public class Circle extends Shape {"{"} <br/>
              {'\u00A0'}private double r;
              {'\u00A0'}public double getArea(){"{"} <br/>
              {'\u00A0'}{'\u00A0'}return r * r * 3.14159; <br/>
              {'\u00A0'}{"}"} <br/>
              {'}'} <br/>
            </code>
            
            <br/><br/>

          </p>
        </>
      }/>
      {/* Arrays */}
      <Collapsible title="Arrays" content={
        <>
          <h1>Arrays</h1>
          <p>
            It can get rather tedious to create several similar objects of the same data type with different identifiers, especially if there are many variables to be made.
            For example, if you were making a list of the names of all the students in your class, declaring one new variable for each student would both take a lot of time and be difficult to keep track of:
            <br/><br/>

            <code>
              String student1 = "Alice"; <br/>
              String student2 = "Bob"; <br/>
              String student3 = "Carl"; <br/>
              String student4 = "Daniel"; <br/>
              ...
            </code>

            <br/><br/>
            Instead, you can declare a single variable that represents an ordered array of these students using square brackets after the data type:
            <br/><br/>

            <code>
              String[] students = new String[{"<number of students>"}];
            </code>

            <br/><br/>
            By declaring an array this way, the values in each cell of the array is the object's default value.
            For primitive types, this value is 0.
            For objects (such as Strings), this value is null.

            <br/><br/>
            We can now access and modify values in this array as if they were normal singular data types by using square brackets after the identifer to locate the cell index.
            However, keep in mind that arrays are zero-indexed. 
            That is, the first cell is found at [0], not [1].

            <br/><br/>
            For example, if we wanted to transfer the inital four students into an array, we could write the following code:
            <br/><br/>

            <code>
              String[] students = new String[4]; <br/>
              students[0] = "Alice"; <br/>
              students[1] = "Bob"; <br/> 
              students[2] = "Carl"; <br/>
              students[3] = "Daniel"; 
            </code>

            <br/><br/>
            Additionally, there exists a shortcut to intialize an array with specific values. 
            Instead of new String[4], we can put all the elements into curly brackets and separate them using commas:
            <br/><br/>

            <code>
              String[] students = {'{'}"Alice", "Bob", "Carl", "Daniel"{'}'};
            </code>

            <br/><br/>
            Note that this syntax only works upon declaration.
            <br/><br/>

            <br/><br/>
            Now, let's say we wanted to print the third student's name, then change it to "Carmen".
            We can refer to the third element as students[2], then treat it like a normal String:
            <br/><br/>

            <code>
              System.out.println(students[2]); <br/>
              students[2] = "Carmen";
            </code>
          </p>
          <h1>Traversal</h1>
          <p>
            Using a for-loop, we can iterate through every item in an array.
            The trivial way of doing it is by initializing a counter variable, and continue incrementing it by 1 until it reaches the size of the array.
            Here's an example of how we can iterate through the array of students that we declared earlier and print each student:
            <br/><br/>
            <code>
              for (int i = 0; i {"<"} students.length; i++) {"{"} <br/>
              {'\u00A0'}System.out.println(students[i]);
              {"}"}
            </code>
            <br/><br/>
            There is also another way to iterate through an array.
            It still uses a for-loop, but it is a modified version, known as a "for-each loop".
            Here is the syntax for it:
            <br/><br/>
            <code>
              for (String s : students) {"{"} <br/>
              {'\u00A0'}System.out.println(s);
              {"}"}
            </code>
            <br/><br/>
            Each iteration, the value of s will be set to the next value in students.
            Note that for-each loops pass by value, not by reference, so directly modifying s will not change students.
          </p>

          <h1>2D Arrays</h1>
          <p>
            A 2D array is an array where each element is an array itself. 
            For instance, if we wanted to represent a 3 x 3 grid filled with numbers from 1 to 9, we could declare it using the following syntax:
            <br/><br/>

            <code>
              int[][] grid = {"{"} <br/>
              {'\u00A0'}{"{"}1, 2, 3{"}"}, <br/>
              {'\u00A0'}{"{"}4, 5, 6{"}"}, <br/>
              {'\u00A0'}{"{"}7, 8, 9{"}"}, <br/>
              {"}"};
            </code>

            <br/><br/>
            To access a specific element (for example, the cell with value 3), we can first specify the [0] array in the 2D array, then the [2] element in that array.
            Here is the syntax for it:
            <br/><br/>

            <code>
              System.out.println(grid[0][2]);
            </code>

            <br/><br/>
            Output:

            <br/><br/>
            <code>
              child
            </code>
          </p>
        </>
      }/>
      {/* ArrayLists */}
      <Collapsible title="ArrayLists" content={
        <>
          <h1>Java Libraries</h1>
          <p>
            A Java library is a collection of classes that have already been written. 
            To import one of them, you can use the keyword "import" followed by the package that the class belongs to.
            An ArrayList is a resizable array class that can be found in the java.util package.
            To import it, you can add the following line:

            <br/><br/>
            <code>
            import java.util.ArrayList;
            </code>
            <br/><br/>

            Alternatively, you could also use * to denote "the whole package":

            <br/><br/>
            <code>
            import java.util.*;
            </code>
            <br/><br/>
          </p>

          <h1>ArrayLists</h1>
          <p>
            ArrayLists are helpful when you need a resizable and dynamic array.
            To initialize one, you could use the following constructor:

            <br/><br/>
            <code>
            ArrayList{"<"}E{">"} myArrayList = new ArrayList{"<"}E{">"}();
            </code>
            <br/><br/>

            Here, E denotes any object type.
            For primitive data types, you actually need to use the corresponding wrapper class (which will not be discussed in this article).
            For instance, you would use Integer instead of int and Double instead of double.
            <br/><br/>

            To add an element, ArrayList has an add(E newObj) method, where newObj represents the object that you are adding and E represents the type.
            There is also an overloaded method add(int index, E newObj).
            This method will add newObj to index, and push all later elements back by 1.
            The following code creates an ArrayList{"<"}Integer{">"} with elements [1, 2, 3, 4] using a combination of those two methods.

            <br/><br/>
            <code>
              ArrayList{"<"}Integer{">"} nums = new ArrayList{"<"}Integer{">"}(); <br/>
              nums.add(2); <br/>
              nums.add(3); <br/>
              nums.add(0, 1); <br/>
              nums.add(4); <br/>
            </code>
            <br/>

            To access elements, instead of using square brackets like a regular array, you must use the get(int index) method, which returns the element at the specified index.
            The following code accesses the item in index 2 of the previously initialized ArrayList:

            <br/><br/>
            <code>
              System.out.println(nums.get(2));
            </code>
            <br/><br/>

            Output:

            <br/><br/>
            <code>
              3
            </code>
            <br/><br/>

            You can remove elements from an ArrayList using the remove(int index) method, or using the remove(E obj).
            The first one removes the object at the specified method, then returns it.
            The second one will remove the first occurence of the object obj and return true, or false if the object is not present.

            <br/><br/>
            Just like arrays, you can also traverse ArrayLists using a for loop and a dummy variable.
            Rather than setting the condition to be "i {"<"} nums.length", we would use the .size() method, which returns the size of the ArrayList.
            The only additional thing to watch out for is if you are removing elements while traversing.
            If you remove the element at position i, then everything after it will shift down by one.
            Then, if you increment i again, then the element that used to be at position i + 1 (prior to the removal) will be completely skipped during the traversal!
            To fix this, you could try either looping backwards or not incrementing the dummy variable if the current item is removed.
            The two following code segments both attempt to loop through all elements of the previously intialized ArrayList, nums.
            However, the first example skips over every other element by accident:

            <br/><br/>
            <code>
              for (int i = 0; i {"<"} nums.size(); i++){"{"} <br/>
              {"\u00A0"}System.out.println(nums.remove(i)); <br/>
              {"}"}
            </code>
            <br/><br/>

            Output:
            <br/><br/>
            <code>
              1 3
            </code>

            <br/><br/>
            <code>
              for (int i = nums.size() - 1; i {">="} 0; i--){"{"} <br/>
              {"\u00A0"}System.out.println(nums.remove(i)); <br/>
              {"}"}
            </code>
            <br/><br/>

            Output:
            <br/><br/>
            <code>
              4 3 2 1
            </code>
            <br/><br/>

            Finally, a for-each loop also works for ArrayLists:

            <br/><br/>
            <code>
              for (int i : nums){"{"} <br/>
              {"\u00A0"}System.out.println(i); <br/>
              {"}"}
            </code>

            <br/><br/>
            Output:
            <br/><br/>

            <code>
              1 2 3 4
            </code>
          </p>
        </>
      }/>
      {/* Searching and Sorting */}
      <Collapsible title="Searching and Sorting" content={
        <>
          <h1>Overview</h1>
          <p>
            This section briefly describes some algorithms used for searching and sorting a dataset. Most of these
            <br/><br/>
            These algorithms presented also have a time complexity, which is analyzed using Big-O notation. 
            Big-O notation represents the number of operations necessary for an algorithm to a degree of N, where N (usually) represents the size of the dataset.
            It ignores coefficients, and only focuses on the factor that the complexity changes by in relation to N.
            For instance, O(N) represents linear time, meaning there is a constant number of operations done for each element.
            O(N^2) represents a quadratic runtime, meaning there are N operations done for each element.
            Some of the other common time complexities are: O(log N), O(N log N), O(√N), O(N√N), O(1), and O(N^3).
          </p>

          <h1>Binary Search</h1>
          <p>
            Binary search is a popular algorithm that performs in O(log N) time by repeatedly halving the amount of data.
            In general, it is used to find the index of a particular element, K, within a sorted array.
            It begins by checking the middle element i and comparing it with the target, K.
            If it is a match, then K has been found.
            Otherwise, if the element i is smaller than K, this must mean that all elements before i are also smaller, so we don't need to bother checking the first half.
            Similarly, if the element i is greater than K, then we don't need to bother checking the second half.
            So, we can move onto the half that may contain K, and repeat the process.

            <br/><br/>
            The following code is an iterative method that binary searches for the index of K in the array A:
            <br/><br/>

            <code>
              int L = 0, R = A.length - 1, mid; <br/>
              while (L {"<="} R){"{"} <br/>
              {'\u00A0'}mid = (L + R) / 2; <br/>
              {'\u00A0'}if (A[mid] == K) break; <br/>
              {'\u00A0'}else if (A[mid] {"<"} K) R = mid - 1; <br/>
              {'\u00A0'}else L = mid + 1; <br/>
              {"}"} <br/>
              <br/>
              if (R {"<"} L) mid = -1; <br/>
              <br/>
              // now mid contains the index of K, or -1 if K is not present
            </code>
          </p>

          <h1>Bubble Sort</h1>
          <p>
            Bubble sort is a very easy and comprehensible sorting algorithm. 
            This description uses a 1-indexed array.
            Bubble sort begins by iterating through all indices of the array, from index 1 up to N - 1. 
            At each index i, it checks if element i is greater than element i + 1.
            If it is, we call this an inversion, since the two elements should be in inverted order.
            So, we swap the two elements and continue looping.
            After the first iteration, we repeat the same process again, but starting the loop from index 2, then 3, and so on.
            
            <br/><br/>
            The following code sorts a 1-indexed array A using bubble sort:
            <br/><br/>

            <code>
              for (int i = 1; i {"<"} A.length; i++){"{"} <br/>
              {'\u00A0'}for (int j = i; j {"<"} A.length; j++){"{"} <br/>
              {'\u00A0'}{'\u00A0'}if (A[j] {">"} A[j + 1]){"{"} <br/>
              {'\u00A0'}{'\u00A0'}{'\u00A0'}int tmp = A[j]; <br/>
              {'\u00A0'}{'\u00A0'}{'\u00A0'}A[j] = A[j + 1]; <br/>
              {'\u00A0'}{'\u00A0'}{'\u00A0'}A[j + 1] = tmp; <br/>
              {'\u00A0'}{'\u00A0'}{"}"} <br/>
              {'\u00A0'}{"}"} <br/>
              {"}"} 
            </code>

            <br/><br/>
            Since there are N iterations with N elements in each iteration, bubble sort has a time complexity of O(N^2), which is inferior to many other sorting algorithms.
            However, the selling point of bubble sort lies in its simplicity.
          </p>

          <h1>Merge Sort</h1>
          <p>
            Merge sort achieves an O(N log N) time complexity using a similar approach to binary search.
            The idea of merge sort is that if you had two sorted arrays, A and B, and you wanted to merge the two arrays such that the new array is still in sorted order, you could accomplish this in O(N) time.
            You could begin by creating an empty array C, with size equal to A's size + B's size. 
            Then, keeping a pointer to the index in A and B that has not been placed in C yet, we continuously pick the smallest element that either of the pointers are pointing at and increment that pointer.
            
            <br/><br/>
            For example, if A was [1, 3, 5, 7] and B was [2, 4, 6], we would initialize A's pointer to 0 and B's pointer to 0.
            Then, since A[0] is less than B[0], we put A[0] into C and increase A's pointer by 1.
            So now, we have basically truncated A to [3, 5, 7] and B to [2, 4, 6], and C contains [1].
            To better understand this, imagine you had two stacks of cards that were sorted from top to bottom, and you wanted to combine the two piles into one sorted pile.
            Obviously, you would continuously take the smaller of the two top elements, until one pile runs out, at which point you just move all the elements from the other pile into the sorted pile.
            This procedure is analogous to merge sort's merging process.

            <br/><br/>
            So, to sort our array A, we would begin by using merge sort on the first half of A and the second half of A. 
            Once the two halves are sorted, we can combine them using the merging process.
            The process of calling merge sort within the merge sort method is called "recursion", and it is explained in the following collapsible.

            <br/><br/>
            The following code sorts the array A, which is 0-indexed:
            <br/><br/>

            <code>
            public int[] merge(int a[], int b[]){"{"} <br/>
            {'\u00A0'}int ptrA = 0, ptrB = 0; <br/>
            {'\u00A0'}int[] c = new int[a.length + b.length]; <br/>
            {'\u00A0'}<br/>
            {'\u00A0'}while (ptrA {"<"} a.length && ptrB {"<"} b.length){"{"} <br/>
            {'\u00A0'}{'\u00A0'}if (a[ptrA] {"<"} b[ptrB]){"{"} <br/>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}c[ptrA + ptrB] = a[ptrA]; <br/>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}ptrA++; <br/>
            {'\u00A0'}{'\u00A0'}{"}"} else {"{"} <br/>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}c[ptrA + ptrB] = b[ptrB]; <br/>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}ptrB++; <br/>
            {'\u00A0'}{'\u00A0'}{"}"} <br/>
            {'\u00A0'}{"}"} <br/>
            {'\u00A0'}<br/>
            {'\u00A0'}while (ptrA {"<"} a.length){"{"} <br/>
            {'\u00A0'}{'\u00A0'}c[ptrA + ptrB] = a[ptrA]; <br/>
            {'\u00A0'}{'\u00A0'}ptrA++; <br/>
            {'\u00A0'}{"}"} <br/>
            {'\u00A0'}<br/>
            {'\u00A0'}while (ptrB {"<"} b.length){"{"} <br/>
            {'\u00A0'}{'\u00A0'}c[ptrA + ptrB] = b[ptrB]; <br/>
            {'\u00A0'}{'\u00A0'}ptrB++; <br/>
            {'\u00A0'}{"}"} <br/>
            {'\u00A0'}<br/>
            {'\u00A0'}return c; <br/>
            {"}"} <br/>
            <br/>

            public int[] mergeSort(int A[]){"{"} <br/>
            {'\u00A0'}if (A.length == 1) return A; <br/>
            <br/>
            {'\u00A0'}int mid = A.length / 2; <br/>
            <br/>
            {'\u00A0'}int[] leftHalf = new int[mid], rightHalf = new int[A.length - mid]; <br/>
            <br/>
            {'\u00A0'}for (int i = 0; i {"<"} mid; i++) leftHalf[i] = A[i]; <br/>
            {'\u00A0'}for (int i = mid; i {"<"} A.length; i++) rightHalf[i - mid] = A[i]; <br/>
            <br/>
            {'\u00A0'}return merge(mergeSort(leftHalf), mergeSort(rightHalf)); <br/>
            {"}"}
            </code>

            <br/><br/>
            The O(N log N) time complexity can be proved by focusing on any element, call it i.
            Element i was merged once in a group of 1, then in a group of 2, then a group of 4, etc.
            In general, the size of the group that element i was merged in must be at least double of the previous size, since after being merged, the size would have doubled.
            So, the maximum number of times that element i could have been processed is the log base 2 of the size of the array.
            Given that each of the N elements was merged log N times, the total time complexity is O(N log N).
          </p>
        </>
      }/>
      {/* Recursion */}
      <Collapsible title="Recursion" content={
        <>
          <h1>Recursion</h1>
          <p>
            Recursion refers to when a method calls itself. 
            This recursive call would be executed, and the previous call is stored on the call stack (a stack is a First-In, First-Out data structure).
            Once the current call finishes, the next call on the call stack is popped and executed.
            Recursive methods must converge to a base case, otherwise it would continue to call itself forever, eventually leading to a stack overflow.
            In many ways, they are comparable to loops, since they can repeat over and over while some condition is still true, until they reach the last case.
            However, they are more versatile than loops, as recursion can be more flexible and they can make as many calls as necessary.

            <br/><br/>
            The following code shows a recursive function that solves for a * b:
            <br/><br/>

            <code>
              public int mult(int a, int b){"{"} <br/>
              {'\u00A0'}if (b == 0) return 0; <br/>
              {'\u00A0'}return mult(a, b - 1) + a; <br/>
              {"}"}
            </code>

            <br/><br/>
            If b is zero, the function simply returns 0. 
            Otherwise, it returns a * (b - 1) + a, and that eventually converges to b = 0.
            <br/><br/>
          </p>

          <h1>Usages</h1>
          <p>
            In problem solving, recursion can be used to break a bigger problem into subproblems, then using the answers from the subproblems to find the original problem's answer.
            Many algorithms also use recursion. Common examples are DFS and BFS in graph theory, which can explore each node in a graph by continuously recursing to unvisited neighbor nodes.
            Also, some of the searching and sorting algorithms mentioned above can be implemented recursively.
            For example, the following code is a recursive binary search method that returns the index of element K in the sorted array A (or -1 if K is not present):

            <br/><br/>
            <code>
              public int binarySearch(int K, int L, int R, int[] A){"{"} <br/>
              {'\u00A0'}// base case, if L {">"} R <br/>
              {'\u00A0'}if (L {">"} R) return -1; <br/>
              {'\u00A0'}int mid = (L + R) / 2; <br/>
              <br/>
              {'\u00A0'}if (A[mid] == K){"{"} <br/>
              {'\u00A0'}{'\u00A0'}return mid; <br/>
              {'\u00A0'}{"}"} else if (A[mid] {">"} K){"{"} <br/>
              {'\u00A0'}{'\u00A0'}return binarySearch(K, L, mid - 1, A); <br/>
              {'\u00A0'}{"}"} else {"{"} <br/>
              {'\u00A0'}{'\u00A0'}return binarySearch(K, mid + 1, R, A); <br/>
              {'\u00A0'}{"}"} <br/>
              {"}"}
            </code>
          </p>
        </>
      }/>
    </div>
    </>
  );
}

export default Portfolio;