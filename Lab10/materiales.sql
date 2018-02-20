BULK INSERT a1421467.a1421467.[Materiales]
   FROM 'e:\wwwroot\a1421467\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )