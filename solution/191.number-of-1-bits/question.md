Write a function that takes an unsigned integer and return&nbsp;the number of &#39;1&#39;&nbsp;bits it has (also known as the Hamming weight).

&nbsp;

Example 1:


Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011&nbsp;has a total of three &#39;1&#39; bits.


Example 2:


Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000&nbsp;has a total of one &#39;1&#39; bit.


Example 3:


Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one &#39;1&#39; bits.

&nbsp;

Note:


	Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
	In Java,&nbsp;the compiler represents the signed integers using 2&#39;s complement notation. Therefore, in Example 3&nbsp;above the input represents the signed integer -3.


&nbsp;

Follow up:

If this function is called many times, how would you optimize it?
