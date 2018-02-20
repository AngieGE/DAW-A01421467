SET DATEFORMAT dmy

BULK INSERT a1421467.a1421467.[Entregan]
   FROM 'e:\wwwroot\a1421467\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

