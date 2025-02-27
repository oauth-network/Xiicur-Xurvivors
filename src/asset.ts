import { CTX, texture } from "./core/canvas"

const img = async (data: string) => {
    const obj = new Image()
    obj.src = data
    await new Promise((resolve) => {
        obj.onload = resolve
    })
    return obj
}

export type Assets = Awaited<ReturnType<typeof loadAssets>>

export const loadAssets = async () => {
    const hero = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAQCAMAAAC2lwjzAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAnZQTFRFAAAAXEClIxc+Fw8oHRQ0DwsZTTUoY0QugVo9UDctEwwhLR8cQy4fAgEBVTsoimBEQy4rVz01WVNbKiY1Lh5Rg1xEOyw4RDM8QThKNCpARC8lPCocCAYEfFY6zY5gxIhczo9h2sa4tLS2Qj5LOScqOykrQS4qsre3OjJFEQsViV9ApXJN0ZFix4pdonBNz49h6cSq/v7+taGTlGZGbUw0Fw8oNStCLURttaKUkWRGEgseWU1I1pRk1JNjRzEhNjU1g2BH57+j////3bWZhl0/RjAiFw8nMSc+V1RbLSoz5uPh58Gm26F305JjXEArMyUbf1g87dG8zrCablNAXkExRS57MCo4HBIxc3Nz+/v739/fzMO9ybOi5ciz89/Q9fX11cS4dVI4bE8+EAobkpKS/f396enpubm5z8/P8/PztbW1k5OT/Pf0wsHBEQsfHhQ2VlVY+vr6x8fH1dXVpaWl8PDw+fn5vLy8EAsbVFJXFhMeqqmq7u3v19Lg5ePn6urqPj4+ISEhs7Oz8vLymZmaGxIwqKaoLh9RFREeSjRsZCjDajW8i3mn5+Xp4uLi3d3d6OjoXVxhSTRqTB6XbCjXZCXHSRuSWEhwurHHgXWUb1KcjHumW1peGxYlirBgWT2LZm5eeZlXWFpZRyGFV0N9ZCXGVR+pLxFdXSO6OxZ0YiTDSB+KfqBaRRuIFA4kSFFGQR91VDGOaHlbQRx8QhmDNR5aLCQ9QB91RhqKYiTENB9Uiq9gKhJSOiZlMSJISyB7QxqELxRXIBE5QBpzMxVjYkGsgEk6Syk0TVFOMypBWjyfJxs4SSc/hKhdp3tbXkFEKhpCFg8oO7zXEQAAANJ0Uk5TAAEGLRgz2v/6gAm4////63JyUiIB///////T/////////+pkU1f///+D///////////5+Pok/////x/a////////////+h///6//////////////vAH/If/////////////CNP////////////87Eu//////////fv9s+v//////////+0D/AWDy/////////67/yf//////////wyb///////////////////+7Gf////////////////9ZAf///////4sB/////wH///////8NRMgMVwAAAXZJREFUeJydlL1Lw1AUxe+xpqmtoBWhKDgJoouCQwVFEBxEEEEQHQW76FRc6x+gY/0YnOLi5iguIm51aF3EQUV0sVCQDq2aWmkF381L0rQK+nqHe9/v3MNJCElARBBVJbc0ZpSaZPx0hOBUvgmGregsVCxHL2r1oMwcOGBK8qPKjiGPARlVFoFRvNmko4LMOLJ9NcMZKbIInMGtV5l1TsVO0Y5JkUXg0rtXacFLxKKbYdEMWlZkNCoxPPUz3dMgj11VBjUogHk1dR2hHgnbcUUGxYP5OiXBPfc4KXGTFFk8w0R7yatsyXk6h5N5xIkUGawEy14H7cGtmEAD9nsKDSsCyXTX2teqMBw6gl6JcaBBWtE1iATDXwjb/Mr+BjaoI2ezr0BsOHL2rQskA7uyYfsKixzQ7d7BM/vp/MNG3zT9yfzp0YWFJkKf7EhNRJN3B7QDjFn+//G+SFhPy8DURjIwSpdtwIj830QtDqyl6XdmoVy35rMc3xqNxREWk16GAAAAAElFTkSuQmCC",
    )
    const mob0 = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAMAAABncAyDAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAfJQTFRFAAAA5MaByZtJ1bqAza535sx5uog1yqVi07qBtJFOpHQ41K5bx5hA0KBJ1axb1q5jy6Faq4A+i2U5pXI86cuP5cN/4L5717t5xZVAxZ5QyKJRvYo6k2gxUjkisYRA5MaI2Lh6sJhqyqxowp9WzLZ8v5tSyaRVuI9InnEyuIxE8ezO6t+96t20vq6IfGNA17FrvKBhg3hei3A8xqRXz61jyp1KtX0z4caK6+TD6uTA1sCM2Lh74r6At5RUemxOnIhc076Izrd9zbBsypxG1rV159220cqpJycgNC8n3cyh1rt/072Hz72L1smh08SXz7yGzaZW1bRw5924vrSRPjkrV09HxbeVzLiDzMGbz8Kazb2Px7OBxaxywJlHz61n7uDE6Nu01cWYS0UxQjsulYRckoBUv6p4xLF+x7WCzb2MxattvZZEyaRZ3ciX6dux386cuaZ3o49hpI1auqJtw6pzxLB9ybiKxq5yv5lKuIg1v5ZF2b2A59Wl3MSI072Cy7N0waptvqZrw610y7qJxrJ8w6dkvI8+toMzxJ5M17t95tKf3cOI0LRyyK1pwqdjvaBduqBfv6drxK5zxalnuphLxqlnzrZ53MaU6Neq386d0LyDwaVjtppVtZtcwK13w7J/xrJ6yrV80b6K0b+Nz7qE1LuDYhvhbgAAAKZ0Uk5TAEmOTCFx90Js+aaA/+7ErKX8/b8Nce7//f7////+rIz////+/v7//v/GBAvV/v/+/f39/v7+/T4Z7f38/v7+/v////9JUP/6+P7+/////v//gIb//fn9/v////7//9MEf//8+fz+/f/+////+iQ+/v7+/v7+////////biv9/////v/////9//+KVP7///7+/////v7+/1VZ/v/+///////+/v//aBVTiVwAAADuSURBVHiclZIhUoJRFEa/D2FgJEKGLguABegCtBIkStCoAaIGjRg0aqDKAmABugDpmCHiyKhc3v8G/v/e27jhvTnvntMesecwHlwn1wH/4lte/pMrJ5JamRCDArkCSuR3XB+K/ABFkd9doIQYlLmdRVxXZDvLXaCEEFSZzldc1ySdecJGCEE9Y07D/ijzZZYERiAaCvkR9k0VyCecQLQ0T0JwrIN3OIE40TwKwakOxnACcaaZrzjXvrzBCUTH4CMuTfACJxBXBu/QM8EATiD6Bm9wb4JbOIF4MNjFkwmu4QTi2WAbQxNcwAnc93tvAP1Iwh3jDFSIAAAAAElFTkSuQmCC",
    )
    const mob1 = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABHdJREFUeJztlGtMm2UUxwuhXHQbF90WkyUylhmzKNe+pYDA+vYC5S1QaEtbWlYulouDyq1jK3Tcyh2KmjETQTchDjTGbOODRh2STGcy30mzqRmM6abEZQqMOWBchON5O+GDEWPol33gJCfPh/c5///vPM/7HBZrKx6j4OtfcJOWB5GqRs5NTQsxp2omvlTUcnKSjoTsT6wIDuHnHvB6bBlMlSZXY6eyUtMUfkPVzFlRtxCgaSVW0xo5v+E6omkjflA1cfqVtWGB8uNhbv+mEZwU4IYmYdKyYH9FDUeL5sMIMY8wvyKUiIH7L3inGLp7TwR29dhmqm3lq/V9h8HwmgiKumRgPCmDnE7BqqaVu5reTqyoGonWtAbC+5/mKOiPoH1oMsqY/W0KDATCgLqJexvh6hjIjRpwiiGjNCEgUUtOypUpMHH3Zxi6Mgi9H3SD2VoGH35+Giyns0HXEQFpDZw38Up9YwTRLkyu1aOgBcUdwNk20mFqPJnKGIP1vUKo7iiHrp7OZYQM2aiBzTCsF78cH7nDlEdeLywhVzpPlUJDXxGkFsZCjDQEjjUXwesfWUBviwZVEzEuM4d2Jh8NPYv58VojSiunFU8fjr6tg8GL/VBRUwLvDnTDBfo8zMxOQ6o8BSjNwTltcdy+jRrYDMN6sTY21LU1g5KXGWKnNFTYam5BFOiPhYO6nACdNRoO2SJBawuH9DbuvOw4eY0yx49SZskNFLmQXBHSiqJjeMVw4nw1WNpLIDI+ECgDD+p6XwHbqRIoKuVDRT55yyCM2LHmKcoMck0qD/VyhoHllzjS7yGYGvAkJyw+glGlsMgwnFHA+zMznQuVeQJoLJRAjjUKtB1cSLdxQdPGXXwx6w27L3Xtjrdk9HfKnDCeVCW8yogy4rqOcNA2RIHGRIC+MhxyCyJBKQ4ChJpt10ll6ujg9TeAj70kpTZm0BkG1q6Ub26zRYtLbPHSAq5z3gljy9IqCnASQHZ9BBTURIOujfeoc6a4nTu7X3fmkqd4+j5bOLuwLe7W5D71mcsousB812JmNkZASyEF1XkiyFRzQX+YC6TRcPEJ8icFQtZ5CKbP+Uqvnk0oDr2nsPLuOsPA2i3+ZO8ucijQh7yS7y6ce+guWgS/5O8h0lgMSjxJdbOjwFHMpLRavvBU8ncPPMjJS+78qS/YwrnFPYpPh3HPH48aQBO8hfzalyDLGsGcFiTXCGC75EdAOGCLl3Fdhp2ybycU9bxxiTGYdoaBtTt6wOXZgz2uXrHXJWhwGQ3s7uIFu0/SmP1A1lt2gSnDjkZ2HIv2RIvQvj/j/RGv+JkRtuB+JZu896o7f/KzJ+PvzEuqNA/XDBgzFU6jNDzBKGMReEtvOqARbsWP/1Um+vmj79PMb7TzmQAXZxjWH7Fn7FgcFn+NxTRbtERvoybo5w710fyyLFpez6NxdNHSShG9N/0c7Rn3gMbiI9hAgSNx/560IZoyxzn2Ka0ELTDp6Of179DbqV8cemu66JOw0RTaDMNGWluxFf8z/gKLIkeKyDf77QAAAABJRU5ErkJggg==",
    )
    const mob2 = await img(
        "data:image/png;base64,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",
    )
    const mob3 = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABQBJREFUeJztVWtMU2cY7v30CqhbnMuciz/mYhYnuuEMc4p4AScIAgo6FJmNOhUVmQVWqhYKLaVICwLlFFpaWqAX6AQHCAh4Wdzi4qKJbmbZlhk1yzKzyJYNN/vsOyVLqtM/3SX74Zc07/ma93mf53nP936HxXqy/kcrIqn0BUplb+cbvD/zqzx3RYW2eunWmgyq1NktqGg/L86nlZFvqKhHYcn/XPE+8yJhib1eoHGdEhVZteL9dLGgvOMSqTcuKHMNCPPpRMIh/ld0THtdJRGqbB/z7AMQHO+GwOQFVdsVkBQ33ee1nQLX+iEok++XyEx97CMNZOqfFmmcZfwG/zjX1gfK6A2ItM6AwOSDoK4LfEvv7wKD+6xI0RxHuDiPEx+2DnGeuYDdOUKIToJLEgUNfog1bZDtqYFY64Sk0gWpxgHpnuNXomIPpoRiyf6piCytQqqgr0vLHfclJF+qtEBaTIOq8YJHDPGsfeC2DtzhV3dVEa4ZjzMQlo4pazSzKI3rM5ZnDLzWfjxjaMcOZx82FVShwOTExrpO7PQO41CjByu3qbCPPvHDvBXFcxgsE7NU1swt6uZvs5XHA3ktfuTaT2K7yQX50QbkmtoRXeeFmO4BxzE4wTd1n5Pk03GEk/uw+HB0sGQb9XOEasc1rq0fbPcYph1pgefTq+jtO4/pUUuxetUufH3rO3xx4zbSUg5g9swEnP7oEq59dUPOkDLx4pXreo225e6KODkqq+z4/JubqG/y4uWX1qNQYYL33CXE0ydA0aSr1v4JStfxiURe+1qo+HB1sEQFliJO+zDYxDWLAJnnhXU+lHsGER2/g3TRjIP2XjRfuIL9ehvmkkKHO4fG9xZbYxhiJhbWfyDPPkrfSt5dEThi74G+/zx217iQsKUE8lIaa5v8mEI6yu4cDYrjOIfuCJWtZaEGwtXBonTuC2zPGQI8i8lIwG2D4Jt7EFncCLGyCTxLL0SGTojK7ZAorXeisoxLHpiBLGOkNJ8+JD5iu8kMLhkyUIYOyN43B3HBrpJzPVn/DDgdo78KqnwXQ2uErYOv94z/CeK6hhGnUOFZo4N0agRcchOwPaOTHXGPgkNEMDkR6VpFKDnZzxSWupq5bYPjTA7bzWBIvmuIdHIIU81eRKsNmN7QSWqMMgYC/GrfT6E1wtZB7ux7bO9kZ2TVTvSlz4c/+RUU5aRj8VEdZtXaMbXJB3FzDyIsfsw2tiA9Z+etqQvKRAwxE5M27162tED15fPG1vsy2h/Mm1Hfjnm6OuTs3YmW9Fh4M2IQf1gNnuMUMTUSEGg77oUaCFcHS6hovszxjk2+NuIuXlGCug3L4U6aj95182BLjMaxtDioN70F3cZVcCYvQO2KxeemzC0SBm8OEjVxyxbRiTEXGlNj71VkroaW5DWsWwwPqdFFRNBpS7BpXx6mm92TM+A6PUEpW6+GGghXB0uaWpEqVLfdZl4Nc30xZ09oO4nZBguS31NAvusdHNi6ASVZSdCsXzlhSYgZS1qYFhNKTvaysuVLc4+tffOiOj1hovDtVLy7PRuZ+/OwsKwaUaRzXDKUTH2Oc/g3qtJ9XbLZkB1a42/piFhQ+Jxkm6GFMnh+5JGB4zCDFhyk0eCP+SpK1M7LURm6zQ/f3Q8Mc4buRVk+XUkZu29yXMNBLIcRzZxrx2CAqvF9LzrY5JCmlL9KOP/yNf6ndDxZ/+X6A7mwBHA5IJdnAAAAAElFTkSuQmCC",
    )
    const coin = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALFQTFRFAAAAjIyMYmJiNDQ0jIyMjIyMZ2dnNDQ0jIyMjIyMNDQ0NDQ0jIyMjIyMioqKYWFhNDQ0NDQ0NDQ0jIyMh4eHaGhoPT09KCgoMzMzNDQ0VlZWQEBAOTk5KioqFBQUFhYWHh4ehYWFUlJSOTk5FBQUHh4dNzc3jIyMioqKZ2dnMjIyLi4tPDw7PDw7jIyMjIyMampqPDw7PDw7PDw7jIyMjIyMampqPDw7jIyMZ2dmPDw7QNLdegAAADt0Uk5TAB6UBgGB/2Yp39wYDZ3///+uClfp////9ETA/v////+iUXrc1XJAPJ+JloatJlPn1O1OAQWh/4smow7njXaTAAAAVElEQVR4nGNkAAJGRsa/IAqIWYDsn1A2B+NfFsavYDYPIxi8A7GFIeznILYUhP0AxFZkZPzFzsh4C8RWh4hfBpujB2afBbNNgKyTUPMZLBgZjwEpAFmbDQxFhZLGAAAAAElFTkSuQmCC",
    )
    const bullet = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQ0lEQVQYV2NkIAAYYfKm2k7/kdWevroPLAcmQJI7tsWgmOXhtYQBpAhFASu/O1jR7487GchTgGwHigkwd+B0JD6fAgA0lyoJwxgCagAAAABJRU5ErkJggg==",
    )
    const elements = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAICAMAAABta0kZAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAadQTFRFAAAANStChoGILi4uo6Ojd3d3AAAAAEXWD0XCAk7wQCpEQThrRGLIWnvknZzouqjlsqPlnZvo7eGeuLW58vDlR0dI6+vrr6+wAAAAAETWA0/zWI3/yNr/yNn/VYv/PShCPzpzSG3cd4vr2rzl6snnvqnkk5fotFJSAAAAHR0dWlpagYGBjY2N6enpoKCgAAAAWY7/////VIv/PCU6PECISHPpfo/s48Tm89XqtKblc4joZGNlTExMpKSl3t7e1NXVTk5O0dHRmJiYnr3/ytv/7/T/xtn/PiQyPDyCP2znYYPws6Xmxa3lipLpVnjisbGy/v7+3t7eamprHx8fr6+wgoKDoL7/zN3/SCUjOShOOFfDOmnmTXjwU3vvRWzeP1i5RURPYGBgj4+PYWFhmpqa09PTzs7OkJCQERERVIr/VCseOR0pOz6KOFO+N2HaOGHZPFGvP0CDAAAANDQ0mJiY9PT08/PzZ2dnydr/ckAjXjEePh8nOiRAOS1cOy1ZOyZAOyIzBQUFfHx8ubm5NjY2gE0oekcnYDIfUiofRiQjQiIjPSEhOh8iCbuYKwAAAI10Uk5TAP//Me7MAyH//wg3nMLAmjQF////b//+FiH//////zelzMzMzJos/wIgTZPX/+YB////nMzMzMzMzJ3/f+b+9rDvsf/////CzMzMzMzMw/b//91i4Ir//8DMzMzMzMzA/3qpe9v5+78s/5rMzMzMzMyaCj7J//+O/zSazMzMzJAqEML7cAUsncPAmioDdI6qmQAAARtJREFUeJxdkUFKA1EMhvOPUGk3Mq0bLzAUegGt0AMo0hMo4hm67KIu3HsDpbhzKbjspqg3EJyeYTpuldKY5CWlNvBC3pv5v/cnDxQBIo5Ki8zqtaY9AL/7kHP+aSHFt/7uGtiCHTByotpIaKNi5xipcYCIFTe8WrSXotMkCtWjoJJ05dnaQMIhqjhAhQu/unbvZ8/3H/9AJ+8K0hBQcmQcIcFB/aSbNftQxXzgoJeiFJAlG4a0pqRy0y8lAp866DDpnpsX8mGJ+dBB0wABV1MSR6SkMsbMm9kHKFp7tNaOH258fx8jsYsN5K+kRV7zLqg6ez03YQeXT9mKrx008U7QUf/ilbZjy5GT3jTdinB8VNvz3zloZFaYAvAHAkBiEde02F4AAAAASUVORK5CYII=",
    )
    const rocks = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAAWklEQVQoU2NkoBAwIutv8LT6D+I3bD9GlDhILVyhqbbTf2+5H3DzYIbADIVJoBsONgCkGZtPTl/dx4huALoLUZyKzRB8hqN4AV9YIhsCchWyWoIuIBRJFBsAAMlEIQkNy0rpAAAAAElFTkSuQmCC",
    )
    const crate = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVQ4T2NkoBAwUqifAWyAqbbTf3IMOn11HyMjSHNgmBuDkYkhSWacO3OeYf2qXQxgA5q7ysGaQYLI4MT1Q2CuhaYdijjMstqyToQBIM3Irrj0ezmKJj3WSDgfphbFAGzuhxmCrBlZHdwA5DBAdwmyBmQ5lDAAGQAC+w8fZyguzMIIC5ghIC/29k9jcLS1BAvBAxHZAJAETAG6t0AWIMvDDRCQ5AVrQlcAC1RY7CDLg9gfnn+GxIK+hTLDw4evMMJRXl4MLIZL7uKJuwgDlOSUMVyAzwv3Ht1lgBsAUojsCpjN6AbAXAKSB2kGAcrzAswWUjMUKCOB9AIA8X2M/BEdxqQAAAAASUVORK5CYII=",
    )
    const saber = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAMAAADjcdz2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZhQTFRFAAAAAAAAOTk5UVFRHh4fAAAAAAAAS0tL/v79//7/zM3NGRkZAAAAAAAAqamq/////Pz8TE1NAAAAAAAAmpqa+Pj4Pj4/AAAAAAAAAAAAAAAAhoaG6OjoKioqAAAAAAAACAgIPDw8jo6O0dHR29vc0M/QFxcXAAAAAAAAEhISREREmJiY7Ozs/v7+9PT0nJycGhobr6+wAQEBAAAAJiYmbGxttbW139/fhoaGICAgAwMD7e3tjo6OAAAAISEi1tbX/f393Nzcbm5vDg8PAAAAAAAAv7+/ZmZmAAAATk5O9fX1fH19MDExCwsMAAAAAAAAjo6P8vLzQ0NEAAAAMDAw+vr74uLieXl6z8/Pd3d4Ojo6AQEBamtr19fXMjIyAAAAAAAAODg4lJSUeHh4Hx8gAAAAQ0NDycnJ2traq6usvr6/FBMUAAAAAAAAAAAAAAAAHR0dr6+v4ODgjIyMERERAAAANjY2mpqa+/v7YGBgAAAADg4OgICA9/f3jI2NAAAABQUFdnZ2REREAQEBOzs8cnJyOjo6AAAAir4tFQAAAIh0Uk5TAGDp+8IpH/z////iCVn/////NUv///8kBkWY///3CE+p5f////+2Dlqy7///////+v9tMrvr///2s6//+kLG////7mwPbv/kJfj//+VxOEj//8sN3//////+6Kf//7IBTvH//dFb8f/////HBEQ0K7X///+yLcH9//kcgvn//wN///Z55v/xY5CQhsgAAACsSURBVHicY2SAA0YQ+M0I57MxQgBcgBfIRhEQZvwNVgXlSgCZX4CqIGbIQXS/ZhBjvMXIoM4IA38fKTGeYzQGMb89kucCUld0GQ8z2jEynmdgMAIrOWnBuIPR8xjQEGu4trWMIYy7GNwZr2tBBRYyJkBZKxgiQWQk0BY3xlUv8hkZ9zxiYEhGOKyUkXHmfwaGTITTq4CSkxgY8hF+qWdk3HVFLhQhwBCvAjIcABn5Iz98ZIHbAAAAAElFTkSuQmCC",
    )
    const orb = await img(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAaRQTFRFAAAAQixFQzlqQFWvRmrVVnrlfo/rnJroqZ7mpp7mmZroOyIoQCpFQTt1Pl/HU3npd4zru6jk2Ljj17bjuabknpvoiJPrOiAmPitLPkGGP2jaX4HujZXq3Lrj9NTp9NLpzLDjmZnng5HqOx8kPS5YPEmfPmzlY4Twlpjp5cLk++Hv+9/t1bXjj5XpbYbpPR8hPC1aPEigOmnlVX7xfo/tx63j48Hk47/ktqXkeIzqVnnkQSEfOylQPEOVN2TgR3fyY4Txm5rot6XltaTljZTqX4DrSW7bTCcdNx40PDNuN1fGN2jnPnHwU33yYILxX4LxTnjtQWncP1m6XDEfNxkfOCJBO0SYNljJNWLeOGrrO23sPGzpOmPYPFOzP0WNaDkhRSAaNRkmPDFoO0afOFG7NlvRNl3UN1vOO1CxPj5/QDdof0woazohUCcbNRgjNyJBOitZOzZ0PDd3OylMOyM2OyIwilctf0wodUIlWCwdQB0bOBogNRspNxwqOR4nPCAjOR4iOh8iilgtgk4qcT8jZTYgXDAfUSofTCgfRyUfQSMeQiMe3r22CAAAAIx0Uk5TAAEcb6/ExKRvHQEBSJrMzMzMzMybJwEcmsfMzMzMzMzHeR1vzMzMzMzMzMzMzHCvzMzMzMzMzMzMzLDEzMzMzMzMzMzMzMXEzMzMzMzMzMzMzMWkzMzMzMzMzMzMzKVvzMzMzMzMzMzMzHAdm8fMzMzMzMd5HQEneczMzMzMzHkUAQEdcLDFxaVwHQE2x7FRAAAANElEQVR4nGNkYISDb4zcjEhAHJmjjMzRR+ZYI3PckTnByJx4ZE42lL6uBSTKkGUYmuDMUgB7wwYDrDDJcgAAAABJRU5ErkJggg==",
    )

    // included normal and flipped versions for asymmetric sprites
    // note: make sure spritesheet frames are always in 1 row
    return {
        coin,
        hero: [
            // normal
            texture((ctx) => frame(ctx, hero, 0, 0, 16, 0), 16, 16),
            texture((ctx) => frame(ctx, hero, 0, 0, 16, 1), 16, 16),
            texture((ctx) => frame(ctx, hero, 0, 0, 16, 2), 16, 16),
            texture((ctx) => frame(ctx, hero, 0, 0, 16, 3), 16, 16),
            texture((ctx) => frame(ctx, hero, 0, 0, 16, 4), 16, 16),
            // flipped
            texture((ctx) => flipFrame(ctx, hero, 0, 0, 16, 0), 16, 16),
            texture((ctx) => flipFrame(ctx, hero, 0, 0, 16, 1), 16, 16),
            texture((ctx) => flipFrame(ctx, hero, 0, 0, 16, 2), 16, 16),
            texture((ctx) => flipFrame(ctx, hero, 0, 0, 16, 3), 16, 16),
            texture((ctx) => flipFrame(ctx, hero, 0, 0, 16, 4), 16, 16),
        ],
        mob0: [
            // normal
            texture((ctx) => frame(ctx, mob0, 0, 0, 16, 0), 16, 16),
            texture((ctx) => frame(ctx, mob0, 0, 0, 16, 1), 16, 16),
            texture((ctx) => frame(ctx, mob0, 0, 0, 16, 2), 16, 16),
            //flipped
            texture((ctx) => flipFrame(ctx, mob0, 0, 0, 16, 0), 16, 16),
            texture((ctx) => flipFrame(ctx, mob0, 0, 0, 16, 1), 16, 16),
            texture((ctx) => flipFrame(ctx, mob0, 0, 0, 16, 2), 16, 16),
        ],
        mob1: [
            // normal
            texture((ctx) => frame(ctx, mob1, 0, 0, 16, 0), 16, 16),
            texture((ctx) => frame(ctx, mob1, 0, 0, 16, 1), 16, 16),
            texture((ctx) => frame(ctx, mob1, 0, 0, 16, 2), 16, 16),
            //flipped
            texture((ctx) => flipFrame(ctx, mob1, 0, 0, 16, 0), 16, 16),
            texture((ctx) => flipFrame(ctx, mob1, 0, 0, 16, 1), 16, 16),
            texture((ctx) => flipFrame(ctx, mob1, 0, 0, 16, 2), 16, 16),
        ],
        mob2: [
            // normal
            texture((ctx) => frame(ctx, mob2, 0, 0, 16, 0), 16, 16),
            texture((ctx) => frame(ctx, mob2, 0, 0, 16, 1), 16, 16),
            texture((ctx) => frame(ctx, mob2, 0, 0, 16, 2), 16, 16),
            //flipped
            texture((ctx) => flipFrame(ctx, mob2, 0, 0, 16, 0), 16, 16),
            texture((ctx) => flipFrame(ctx, mob2, 0, 0, 16, 1), 16, 16),
            texture((ctx) => flipFrame(ctx, mob2, 0, 0, 16, 2), 16, 16),
        ],
        mob3: [
            // normal
            texture((ctx) => frame(ctx, mob3, 0, 0, 16, 0), 16, 16),
            texture((ctx) => frame(ctx, mob3, 0, 0, 16, 1), 16, 16),
            texture((ctx) => frame(ctx, mob3, 0, 0, 16, 2), 16, 16),
            //flipped
            texture((ctx) => flipFrame(ctx, mob3, 0, 0, 16, 0), 16, 16),
            texture((ctx) => flipFrame(ctx, mob3, 0, 0, 16, 1), 16, 16),
            texture((ctx) => flipFrame(ctx, mob3, 0, 0, 16, 2), 16, 16),
        ],
        bullet,
        crate,
        saber,
        orb,
        eHeart: texture((ctx) => frame(ctx, elements, 0, 0, 8, 0), 8, 8),
        eBullet: texture((ctx) => frame(ctx, elements, 0, 0, 8, 1), 8, 8),
        eArrow: texture((ctx) => frame(ctx, elements, 0, 0, 8, 2), 8, 8),
        eBg: texture((ctx) => frame(ctx, elements, 0, 0, 8, 3), 8, 8),
        eSaber: texture((ctx) => frame(ctx, elements, 0, 0, 8, 4), 8, 8),
        ePlasma: texture((ctx) => frame(ctx, elements, 0, 0, 8, 5), 8, 8),
        eOrbs: texture((ctx) => frame(ctx, elements, 0, 0, 8, 6), 8, 8),
        eMagnet: texture((ctx) => frame(ctx, elements, 0, 0, 8, 7), 8, 8),
        eShoes: texture((ctx) => frame(ctx, elements, 0, 0, 8, 8), 8, 8),
        eXp: coin,
        rocks: [
            texture((ctx) => frame(ctx, rocks, 0, 0, 8, 0), 8, 8),
            texture((ctx) => frame(ctx, rocks, 0, 0, 8, 1), 8, 8),
        ],
    }
}

const frame = (
    ctx: CTX,
    img: CanvasImageSource,
    x: number,
    y: number,
    size: number,
    idx: number,
) => {
    ctx.drawImage(img, size * idx, 0, size, size, ~~x, ~~y, size, size)
}

const flipFrame = (
    ctx: CTX,
    img: CanvasImageSource,
    x: number,
    y: number,
    size: number,
    idx: number,
) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(-1, 1)
    frame(ctx, img, -size, 0, size, idx)
    ctx.restore()
}
