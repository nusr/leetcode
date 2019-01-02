int countSegments(char* s) {
    int count = 0;
    int i = 0;
    int flag = 0;
    for(i = 0;s[i] != '\0';)
    {
        flag = 0;
        if(s[i] != ' ' && s[i] != '\0')
        {
            while(s[i] != ' ' &&s[i] != '\0')
            i++;
            flag = 1;
        }
        else
            i++;
        count += flag;
    }
    return count;
}