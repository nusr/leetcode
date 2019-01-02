char* reverseString(char* s) {
    int i = 0;
    int j = strlen(s) - 1;
    char ch;
    for(;i < j;i++,j--)
    {
        ch = s[i];
        s[i] = s[j];
        s[j] = ch;
    }
    return s;
}