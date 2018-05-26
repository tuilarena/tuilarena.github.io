<template>
    <footer>
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-12">
                    <ul class="orginfo">
                        <li><a href="mailto:post@tuil.no">post@tuil.no</a></li>
                        <li>Telefon (Tromsø Camping): <strong>77 63 80 37</strong></li>
                    </ul>
                    
                    <ul class="credits">
                        <li>Foto: <strong>Ronald Johansen</strong></li>
                        <li>Design: <strong>Reibo AS</strong></li>
                        <li>Arenaillustrasjoner: <strong>Borealis Arkitekter AS</strong></li>
                        <li>Nettside: <strong>Børge Warvik</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {

    background-color: darken($blue, 5);
    color: lighten($blue, 40);

    .col-12 {
        padding: 20px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            display: block;
            padding: 0 5px;

            a {
                color: lighten($blue, 40);
            }
        }

        &.credits {
            padding-top: 10px;
            font-size: .8em;

            li {
                border-right: solid 1px lighten($blue, 10);
                padding-right: 12px;

                color: lighten($blue, 20);

                &:last-child {
                    border-right: none;
                }
            }
        }
    }
}

@media all and (min-width:576px) {
    footer {
        ul {
            li {
                display: inline-block;
            }
        }
    }
}
</style>