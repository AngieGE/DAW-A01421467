BULK INSERT a1421467.a1421467.[Proveedores]
   FROM 'e:\wwwroot\a1421467\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

