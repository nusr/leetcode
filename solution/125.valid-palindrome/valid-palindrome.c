bool isPalindrome(char* s) {
    int len = strlen(s);
    if(len == 0)
        return 1;
    char * temp = (char * )malloc(sizeof(char)* (len + 1));
    int i = 0;
    int j = 0;
    for(i = 0;i < len;i++)
    {
        if('a' <= s[i] && s[i] <='z')
            temp[j++] = s[i];
        else if('A' <= s[i] && s[i] <= 'Z')
            temp[j++] = s[i] + 32;
        else if('0' <= s[i] && s[i] <= '9')
            temp[j++] = s[i];
    }
    temp[j] = '\0';
    for(i = 0,j--;i < j;i++,j--)
        if(temp[j] != temp[i])
            return 0;
    free(temp);
    return 1;
}