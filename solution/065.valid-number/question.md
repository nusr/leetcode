Validate if a given string can be interpreted as&nbsp;a decimal number.

Some examples:
&quot;0&quot; =&gt; true
&quot; 0.1 &quot; =&gt; true
&quot;abc&quot; =&gt; false
&quot;1 a&quot; =&gt; false
&quot;2e10&quot; =&gt; true
&quot; -90e3&nbsp; &nbsp;&quot; =&gt; true
&quot; 1e&quot; =&gt; false
&quot;e3&quot; =&gt; false
&quot; 6e-1&quot; =&gt; true
&quot; 99e2.5&nbsp;&quot; =&gt; false
&quot;53.5e93&quot; =&gt; true
&quot; --6 &quot; =&gt; false
&quot;-+3&quot; =&gt; false
&quot;95a54e53&quot; =&gt; false

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:


	Numbers 0-9
	Exponent - &quot;e&quot;
	Positive/negative sign - &quot;+&quot;/&quot;-&quot;
	Decimal point - &quot;.&quot;


Of course, the context of these characters also matters in the input.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button to reset your code definition.
