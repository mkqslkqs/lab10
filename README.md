# Lab 10 — Frontend & Backend Integration (Short)

## Objectives
- Analyze Carshop UI requirements  
- Disable Spring Boot security  
- Create React app  
- Install MUI and add AppBar  

## Functional Requirements
- List cars with paging/sorting/filtering  
- Add car (modal)  
- Edit/Delete per row  
- Export to CSV  

## Backend (Disable Security)
```java
http.csrf().disable().cors().and()
    .authorizeRequests().anyRequest().permitAll();
npx create-react-app carfront
cd carfront
npm install @mui/material @emotion/react @emotion/styled
