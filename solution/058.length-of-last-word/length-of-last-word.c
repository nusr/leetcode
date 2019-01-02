int lengthOfLastWord(char* s) {
    int len = strlen(s);
    int i = len - 1;
    int j = 0;
    if(len == 0)
        return 0;
    while(i >= 0)
    {
        if(s[i] != ' ')
            break;
        i--;
    }
    j = i;
    while(j >= 0)
    {
        if(s[j] == ' ')
            break;
        j--;
    }
    return i - j ;
}